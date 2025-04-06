import React from 'react';
import './style.css';
import { useCarrito } from '../../context/CarritoContext';

function Carrito() {
    const { carrito, cerrarModal, modalAbierto, eliminarDelCarrito, irPago } = useCarrito();

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
                            <div className="info-principal">
                                <h3>{item.nombre}</h3>
                                <img src={item.imagen} alt={item.nombre} />
                            </div>
                            <p>Tamaño: {item.tamaño}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio Total: ${item.precio}</p>
                            <button className='boton' onClick={() => eliminarDelCarrito(item)}>Eliminar</button>


                        </div>
                    ))

                )}
                <button  className='boton' onClick={() => irPago()}>PAGAR</button>
            </div>
        </div>
    );
}

export default Carrito;
