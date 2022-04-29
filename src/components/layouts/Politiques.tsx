import React, { FC } from 'react'
import {
  Heading,
  useColorModeValue,
  Center,
  Box,
  Grid,
  Text
} from '@chakra-ui/react'
import Transition from '../Transition'

const Politiques: FC = () => {
  return (
    <Transition>
      <Center mt={25}>
        <Heading
          as="h1"
          size="3xl"
          color={useColorModeValue('purple.900', 'teal.300')}
        >
          Politiques de confidentialités
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
                Gestion de vos données
              </Heading>
            </Center>
          </Box>
          <Box mt={20}>
            <Heading
              as="h4"
              size="lg"
              color={useColorModeValue('purple.900', 'whiteAlpha.800')}
            >
              Information sur le destinataire, durée de vie de vos données et
              précision en cas de non-fourniture des données.
            </Heading>
            <Text
              fontSize="18px"
              mt={5}
              color={useColorModeValue('purple.900', 'whiteAlpha.800')}
            >
              Les informations recueillies sur ce formulaire sont enregistrées
              dans un fichier informatisé par Montoya Grégoire Propriétaire du
              site. Ces informations ont pour but de répondre au demande de
              contact via le formulaire. La base légale du traitement est le
              consentement de l’utilisateur. Les données collectées seront
              communiquées au seul destinataire suivant : Montoya Grégoire,
              propriétaire du site https://wwww.montoya.studio Les données sont
              conservées pendant le temps de l’échange avec Montoya Grégoire ou
              pour une durée maximale de 6 mois. La non-fourniture des données
              obligatoires entrainera une impossibilité à communiquer avec le
              propriétaire du site par le biais du formulaire du site. Les
              données optionnelles telles que le Nom seront conservées pour une
              durée identique à celle citée ci-dessus. L’absence de ces données
              non obligatoires n’aura aucune conséquence sur le traitement
              initial de demande de contact et n’entravera d’aucune façon la
              communication que cela soit par le formulaire du site ou tout
              autre méthode mise à place sur la page Contact.
            </Text>
            <Heading
              as="h4"
              size="lg"
              mt={20}
              color={useColorModeValue('purple.900', 'whiteAlpha.800')}
            >
              Vos droits sur vos données
            </Heading>
            <Text mt={5} fontSize='18px'>
              Vous pouvez accéder aux données vous concernant, les rectifier,
              demander leur effacement ou exercer votre droit à la limitation du
              traitement de vos données. Vous pouvez retirer à tout moment votre
              consentement au traitement de vos données ; Vous pouvez également
              vous opposer au traitement de vos données. Consultez le site
              cnil.fr pour plus d’informations sur vos droits. Pour exercer ces
              droits ou pour toute question sur le traitement de vos données
              dans ce dispositif, vous pouvez contacter :
              gregoire@montoya.studio Si vous estimez, après nous avoir
              contactés, que vos droits « Informatique et Libertés » ne sont pas
              respectés, vous pouvez adresser une réclamation à la CNIL.
            </Text>
          </Box>
        </Grid>
      </Center>
    </Transition>
  )
}

export default Politiques
