import {
  Center,
  Container,
  Heading,
  Grid,
  FormControl,
  useColorModeValue,
  Spacer,
  FormLabel,
  Input,
  GridItem,
  Textarea,
  Button
} from '@chakra-ui/react'
import { ChangeEvent, useRef, useState } from 'react'
import Transition from '../Transition'

const Contact = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef({
    lastName: '',
    firstName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  return (
    <Transition>
      <Container maxW="6xl" mt={10}>
        <Center>
          <Heading as="h1" color={useColorModeValue('teal.600', 'teal.300')}>
            Contactez moi
          </Heading>
        </Center>
        <Center mt={15}>
          <form action="">
            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={10}>
              <FormControl>
                <FormLabel htmlFor="lastName" textAlign="center" mb={3}>
                  Votre nom
                </FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="firstName" textAlign="center" mb={3}>
                  Votre prénom
                </FormLabel>
                <Input
                  id="lastName"
                  type="text"
                  value={firstName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="mail" textAlign="center" mb={3}>
                  Votre adresse mail
                </FormLabel>
                <Input
                  id="mail"
                  type="mail"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="telephone" textAlign="center" mb={3}>
                  Votre numéro de téléphone
                </FormLabel>
                <Input
                  id="telephone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPhoneNumber(e.target.value)
                  }
                />
              </FormControl>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel htmlFor="message" textAlign="center" mb={3}>
                    Votre message
                  </FormLabel>
                  <Textarea
                    id="message"
                    size="md"
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setMessage(e.target.value)
                    }
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Center>
                  {isSubmitting ? (
                    <Button
                      isLoading
                      loadingText="Envoie..."
                      colorScheme="teal"
                      variant="solid"
                      size="lg"
                    >
                      Envoyer
                    </Button>
                  ) : (
                    <Button colorScheme="teal" variant="solid" size="lg" type='submit'>
                      Envoyer
                    </Button>
                  )}
                </Center>
              </GridItem>
            </Grid>
          </form>
        </Center>
      </Container>
    </Transition>
  )
}

export default Contact
