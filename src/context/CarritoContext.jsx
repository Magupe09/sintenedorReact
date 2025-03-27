import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    console.log('Contenido del carrito:', carrito);
    const agregarAlCarrito = (item) => {
      
        setCarrito([...carrito, item]);
        console.log(carrito, 'carrito');
       
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider;