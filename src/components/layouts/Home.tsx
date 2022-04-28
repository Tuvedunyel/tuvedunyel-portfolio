import { Container, Heading, useColorModeValue, Center } from '@chakra-ui/react'
import { FC } from 'react'
import Transition from '../Transition'

const Home: FC = () => {
  return (
    <Transition>
      <Container maxW="5xl" mt={10}>
        <Center>
          <Heading as="h1" color={useColorModeValue('teal.600', 'teal.300')}>
            Accueil
          </Heading>
        </Center>
      </Container>
    </Transition>
  )
}

export default Home
