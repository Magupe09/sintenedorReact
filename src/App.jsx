import { useState } from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Carrito from './components/Carrito'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <div className="app">
      <Navbar toggleCart={toggleCart} />
      <main className="main-content">
        <Menu />
      </main>
      <Carrito isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </div>
  )
}

export default App 