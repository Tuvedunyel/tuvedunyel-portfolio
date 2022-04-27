import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { Container } from '@chakra-ui/react'
import Header from './components/Header'

const App: FC = () => {
  const darkMode = useSelector( (state: { darkMode: boolean }) => state.darkMode)

  return (
    <Container maxW="100%" bg={darkMode ? "gray.800" : "white"} p={0}>
      <Container maxW="96%" pt={5} pb={5}>
        <Header />
      </Container>
    </Container>
  )
}

export default App
