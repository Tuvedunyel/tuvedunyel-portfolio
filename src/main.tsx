import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import theme from './lib/theme'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
)
