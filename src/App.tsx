import { FC, useEffect, useState } from 'react'
import './App.css'
import { Container } from '@chakra-ui/react'
import Header from './components/Header'
import Chakra from './components/chakra'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/layouts/Home'
import Projects from './components/layouts/Projects'
import { AnimatePresence } from 'framer-motion'

const App: FC<{ pageProps: string }> = ({ pageProps }: { pageProps: string }) => {
  const location = useLocation();

  return (
    <Chakra cookies={pageProps}>
      <Container maxW="100%" p={0}>
        <Container maxW="96%" pt={5} pb={5}>
          <Header />
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/mes-projets" element={<Projects />} />
            </Routes>
          </AnimatePresence>
        </Container>
      </Container>
    </Chakra>
  )
}

export default App
