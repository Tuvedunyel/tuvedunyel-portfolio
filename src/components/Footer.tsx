import React, { FC } from 'react'
import {
  Flex,
  Center,
  Link,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const Footer: FC = () => {
  return (
    <footer>
      <Container maxW="100%" bg={ useColorModeValue('gray.800', 'gray.200') } pt={30} pb={30}>
        <Flex>
          <Center w="100%">
            <ul>
              <li>
                <Link as={ReachLink} to="/politique" color={ useColorModeValue('#F4F5FF', '#322659') }>
                  Politique de confidentialités
                </Link>
              </li>
              <li>
                <Link as={ReachLink} to="mentions" color={ useColorModeValue( '#F4F5FF', '#322659' ) }>
                  Mentions légales
                </Link>
              </li>
            </ul>
          </Center>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
