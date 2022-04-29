import {
  Center,
  Heading,
  useColorModeValue,
  Grid,
  Box,
  Text
} from '@chakra-ui/react'
import React, { FC } from 'react'
import Transition from '../Transition'

const Mentions: FC = () => {
  return (
    <Transition>
      <Center mt={25}>
        <Heading
          as="h1"
          size="3xl"
          color={useColorModeValue('purple.900', 'teal.300')}
        >
          Mentions légales
        </Heading>
      </Center>
      <Center mt={20}>
        <Grid template-columns="repeat(1, 1fr)">
          <Box>
            <Center>
              <Heading
                as="h2"
                size="2xl"
                color={useColorModeValue('purple.900', 'whiteAlpha.800')}
              >
                Edition du site
              </Heading>
            </Center>
          </Box>
          <Box mt={20}>
            <Text color={useColorModeValue('purple.900', 'whiteAlpha.800')} fontSize='18px'>
              En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
              la confiance dans l’économie numérique, il est précisé aux
              utilisateurs du site internet https://www.montoya.studio
              l’identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi: Propriétaire du site : Grégoire
              Montoya – Contact : gregoire@montoya.studio Hébergeur : SARL
              O2Switch – 222-224 Boulevard Gustave Flaubert – 63000
              Clermont-Ferrand – Téléphone : +33 4 44 44 60 40 Délégué à la
              protection des données : Grégoire Montoya –
              gregoire@montoya.studio Autres contributeurs : Les mentions
              légales sont proposées par le générateur de mentions légales de La
              Webeuse.
            </Text>
          </Box>
        </Grid>
      </Center>
    </Transition>
  )
}

export default Mentions
