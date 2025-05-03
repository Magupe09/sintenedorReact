import { createContext, useState, useContext } from 'react'

const CarritoContext = createContext()

export const useCarrito = () => {
  const context = useContext(CarritoContext)
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider')
  }
  return context
}

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (pizza) => {
    const itemExistente = carrito.find(item => item.id === pizza.id)
    if (itemExistente) {
      setCarrito(carrito.map(item =>
        item.id === pizza.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      setCarrito([...carrito, { ...pizza, cantidad: 1 }])
    }
  }

  const eliminarDelCarrito = (pizzaId) => {
    setCarrito(carrito.filter(item => item.id !== pizzaId))
  }

  const actualizarCantidad = (pizzaId, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(pizzaId)
      return
    }
    setCarrito(carrito.map(item =>
      item.id === pizzaId
        ? { ...item, cantidad: nuevaCantidad }
        : item
    ))
  }

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0)
  }

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarAlCarrito,
      eliminarDelCarrito,
      actualizarCantidad,
      calcularTotal
    }}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContext 