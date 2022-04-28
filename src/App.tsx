import { FC, useEffect, useState } from 'react'
import './App.css'
import { Container } from '@chakra-ui/react'
import Header from './components/Header'

const App: FC = () => {

  return (
    <Container maxW="100%" p={0}>
      <Container maxW="96%" pt={5} pb={5}>
        <Header />
      </Container>
    </Container>
  )
}

export default App
