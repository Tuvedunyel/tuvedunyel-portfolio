import {
  Container,
  Heading,
  useColorModeValue,
  Center,
  Grid,
  Box,
  NumberIncrementStepperProps,
  Link,
  Image,
  Text,
  Badge,
  Flex
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Transition from '../Transition'

export type Project = {
  id: number
  url: string
  logo: string
  nom: string
  descriptif: string
  primaryColor: string
  secondaryColor: string
  externalDependencies: string[]
  technologies: string[]
}

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/projets').then(res => {
      setProjects(res.data)
    })
  }, [])

  return (
    <Transition>
      <Container maxW="7xl" mt={10}>
        <Center>
          <Heading as="h1" color={useColorModeValue('teal.600', 'teal.300')}>
            Projets
          </Heading>
        </Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={10}>
          {projects?.map(
            ({
              id,
              url,
              logo,
              nom,
              descriptif,
              primaryColor,
              secondaryColor,
              externalDependencies,
              technologies
            }: Project) => (
              <Box
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={id}
              >
                <Link href={url} isExternal rel="noopener noreferrer">
                  <Center>
                    <Image boxSize="190px" src={logo} alt={nom} />
                  </Center>
                  <Text
                    fontSize="18px"
                    pt={4}
                    color={useColorModeValue('purple.900', 'whiteAlpha.800')}
                  >
                    {descriptif}
                  </Text>
                <Grid templateColumns='repeat(5, 1fr)' gap={3} mt={5}>
                      {technologies.map(technology => (
                        <Badge
                          fontSize='15px'
                          colorScheme={useColorModeValue('purple', 'teal')}
                        >
                          {technology}
                        </Badge>
                      ))}
                  </Grid>
                </Link>
              </Box>
            )
          )}
        </Grid>
      </Container>
    </Transition>
  )
}

export default Projects
