import React from 'react'
import { CarritoProvider } from './context/CarritoContext'
import Carrito from './components/Carrito'
import Home from './Home'

function App() {
  return (
    <CarritoProvider>
      <Home/>
      <Carrito />
    </CarritoProvider>
  )
}

export default App
