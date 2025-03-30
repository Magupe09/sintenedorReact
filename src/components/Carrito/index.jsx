import React from 'react';
import './style.css';
import { useCarrito } from '../../context/CarritoContext';

function Carrito() {
    const { carrito, cerrarModal, modalAbierto } = useCarrito();

    return (
        <div className={`modal ${modalAbierto ? "mostrar" : ""}`}>
            <div className="modal-contenido">
                <button className="cerrar-modal" onClick={cerrarModal}>X</button>
                <h2>Carrito de Compras</h2>
                {carrito.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    carrito.map((item, index) => (
                        <div key={index} className="item-carrito">
                            <h3>{item.nombre}</h3>
                            <p>Tamaño: {item.tamaño}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio Total: ${item.precioTotal}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Carrito;
