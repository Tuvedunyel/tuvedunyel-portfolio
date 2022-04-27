import React from 'react'
import { IconButton, Flex, Spacer } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../features/darkMode.slice'

const Header = () => {
    const dispatch = useDispatch();
    const darkMode: boolean = useSelector((state: boolean) => state);

  return (
    <header>
      <Flex>
        <h2>Une photo | avatar</h2>
        <Spacer />
        <h1>Header</h1>
        <Spacer />
        <div className="Darkmode">
          <IconButton icon={<MoonIcon />} aria-label="Toggle dark mode" onClick={ () => dispatch(setDarkMode(true)) } />
          <IconButton icon={<SunIcon />} aria-label="Toggle Light mode" onClick={ () => dispatch(setDarkMode(false)) } />
        </div>
      </Flex>
    </header>
  )
}

export default Header
