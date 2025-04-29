import React from 'react'
import { CarritoProvider } from './context/CarritoContext'
import Carrito from './components/Carrito'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <CarritoProvider>
    <Routes>
          {/* Ruta para la página de inicio */}
         
          
          {/* Ruta para la página de Menu */}
          <Route path="/" element={<Menu />} />
          

          {/* Aquí irán otras rutas si las necesitas, por ejemplo, para una página de carrito */}
          {/* <Route path="/carrito" element={<TuComponenteDePaginaDelCarrito />} /> */}

    </Routes>

      <Home/>
      <Carrito />
    </CarritoProvider>
    </BrowserRouter>
  )
}

export default App
