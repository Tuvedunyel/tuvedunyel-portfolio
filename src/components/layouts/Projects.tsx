import { Container, Heading, useColorModeValue, Center } from '@chakra-ui/react'
import React from 'react'
import Transition from '../Transition'

const Projects = () => {
  return (
    <Transition>
      <Container maxW="5xl" mt={10}>
        <Center>
          <Heading as="h1" color={useColorModeValue('teal.600', 'teal.300')}>
            Projets
          </Heading>
        </Center>
      </Container>
    </Transition>
  )
}

export default Projects
