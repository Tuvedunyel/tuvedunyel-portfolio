import React from 'react'
import {
  IconButton,
  Flex,
  Spacer,
  Center,
  Avatar,
  Heading
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode } from '../features/darkMode.slice'

const Header = () => {
  const dispatch = useDispatch()
  const darkMode: boolean = useSelector(
    (state: { darkMode: boolean }) => state.darkMode
  )

  return (
    <header>
      <Flex>
        <Center>
          <Avatar
            name="Montoya Grégoire"
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://btg-communication.fr/wp-content/uploads/2022/02/portrait_gregoire.jpg"
          />
        </Center>
        <Spacer />
        <Center>
          <Heading as="h5" size="xl" color={darkMode ? 'teal.300' : 'teal.600'}>
            Bienvenue
          </Heading>
        </Center>
        <Spacer />
        <div className="Darkmode">
          {darkMode ? (
            <IconButton
              colorScheme="teal"
              variant="outline"
              fontSize="35px"
              icon={<SunIcon />}
              aria-label="Toggle Light mode"
              onClick={() => dispatch(setDarkMode(false))}
            />
          ) : (
            <IconButton
              colorScheme="purple"
              variant="outline"
              fontSize="30px"
              icon={<MoonIcon />}
              aria-label="Toggle dark mode"
              onClick={() => dispatch(setDarkMode(true))}
            />
          )}
        </div>
      </Flex>
    </header>
  )
}

export default Header
