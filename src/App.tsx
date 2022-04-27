import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'

const App: FC = () => {
  const darkMode = useSelector( (state: boolean) => state)

  return (
    <section className={ darkMode ? 'globalContainer dark' : 'globalContainer'}>
      <Header />
    </section>
  )
}

export default App
