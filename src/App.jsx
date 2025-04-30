import React from 'react'
import { CarritoProvider } from './context/CarritoContext'
import Carrito from './components/Carrito'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    
    <CarritoProvider>
    <Navbar />
    <Menu />
    <Carrito/>
    <Footer />
      
    
    </CarritoProvider>
    
  )
}

export default App
