import React, { createContext, useState , useContext} from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    console.log('Contenido del carrito:', carrito);
    const agregarAlCarrito = (item) => {
      
        setCarrito([...carrito, item]);
        console.log(carrito, 'carrito aqui QUIENES SON');
       
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito,  modalAbierto, abrirModal, cerrarModal}}>
            {children}
        </CarritoContext.Provider>
    )
}


export const useCarrito = () => {
    return useContext(CarritoContext);
}