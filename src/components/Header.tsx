import React from 'react'
import {
  IconButton,
  Flex,
  Spacer,
  Center,
  Avatar,
  useColorMode,
  useColorModeValue,
  Heading,
  Link
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { Link as ReachLink } from 'react-router-dom'

const Header = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <header>
      <Flex>
        <Center>
          <ReachLink to="/">
            <Avatar
              name="Montoya Grégoire"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://btg-communication.fr/wp-content/uploads/2022/02/portrait_gregoire.jpg"
            />
          </ReachLink>
        </Center>
        <Spacer />
        <Center>
          <Heading as='h5' fontSize='25px'>
            <Link
              as={ReachLink}
              to="/mes-projets"
              color={useColorModeValue('#322659', '#FAF5FF')}
            >
              Projets
            </Link>

          </Heading>
        </Center>
        <Spacer />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            style={{ display: 'inline-block' }}
            initial={{ y: -20, opacity: 0 }}
            key={useColorModeValue('light', 'dark')}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <IconButton
              colorScheme={useColorModeValue('purple', 'teal')}
              variant="outline"
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              aria-label={useColorModeValue(
                'Passer en monde clair',
                'Passer en monde sombre'
              )}
              onClick={toggleColorMode}
            />
          </motion.div>
        </AnimatePresence>
      </Flex>
    </header>
  )
}

export default Header
