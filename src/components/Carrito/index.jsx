import React, { useContext } from 'react';
import './style.css';
import { CarritoContext } from '../../context/CarritoContext';
function Carrito() {
    const { carrito } = useContext(CarritoContext);
    return (
        <div className='carrit-cart'>
            <h2>Carrito de Compras</h2>
            {carrito.map((item, index) => (
                <div key={index}>
                    <h3>{item.pizza.nombre}</h3>
                    <p>Tamaño: {item.tamaño}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Precio Total: ${item.precioTotal}</p>
                </div>
            ))}
        </div>
    );
}
export default Carrito;