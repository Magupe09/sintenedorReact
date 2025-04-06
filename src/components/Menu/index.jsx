import React from 'react';
import { useContext } from 'react';
import './style.css';
import { getPizzasArray } from '../../data/pizzasData';
import { useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';




function Menu() {
    //Declaracion de estados
    const [modalVisible, setModalVisible] = useState(false);
    const [pizzaSeleccionada, setPizzaSeleccionada] = useState(null);
    const [tamañoSeleccionado, setTamañoSeleccionado] = useState('personal');
    const [cantidad, setCantidad] = useState(1);
    const [precioActual, setPrecioActual] = useState(tamañoSeleccionado);
    //Declaracion de context
    const { agregarAlCarrito } = useContext(CarritoContext);

    // Declaracion de la funcion handlePizzaclick
    const handlePizzaClick = (pizza) => {
        setPizzaSeleccionada(pizza);
        setModalVisible(true);
        setPrecioActual(pizza.precios[tamañoSeleccionado]);
       
    }
    const handleSizeSelect = (size) => {
        //console.log('Tamaño seleccionado:', size);
        //console.log('Pizza seleccionada:', pizzaSeleccionada);
        setTamañoSeleccionado(size);
        if (pizzaSeleccionada) {
            setPrecioActual(pizzaSeleccionada.precios[size]);
        } else {
            console.error('No hay pizza seleccionada');
        }
    };

    const pizzas = getPizzasArray();

    const handleAgregarAlCarrito = () => {
       // console.log('Agregar al carrito,hey');
        //console.log('Pizza seleccionada: hey', pizzaSeleccionada);
        const item = {
            id: pizzaSeleccionada.id,
            imagen: pizzaSeleccionada.imagen,
            nombre: pizzaSeleccionada.nombre,
            tamaño: tamañoSeleccionado,
            precio: precioActual * cantidad,
            precioUnitario: precioActual,
            cantidad: cantidad
        }
        agregarAlCarrito(item);
        //console.log('item agregado', item);
        
    }
    return (
        <section className="menu-section">
            <h2>Nuestro Menú</h2>
            <div className="menu-grid">
                {pizzas.map((pizza) => {
                    return (
                        <div onClick={() => handlePizzaClick(pizza)} className="pizza-card" key={pizza.id}>
                            <h3>{pizza.nombre}</h3>
                            <img src={pizza.imagen} alt={pizza.nombre} />


                        </div>
                    )
                })}
            </div>
            {modalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>{pizzaSeleccionada.nombre}</h3>
                        <img src={pizzaSeleccionada.imagen} alt={pizzaSeleccionada.nombre} />
                        <p>{pizzaSeleccionada.ingredientes.join(', ')}</p>
                        <div className="size-buttons">
                            <button 
                            className={tamañoSeleccionado === 'personal' ? 'active' : ''} 
                             onClick={() => handleSizeSelect('personal')}>Personal $10</button>
                            <button
                            className={tamañoSeleccionado === 'mediana' ? 'active' : ''} 
                             onClick={() => handleSizeSelect('mediana')}>Mediana $15</button>
                            <button 
                            className={tamañoSeleccionado === 'familiar' ? 'active' : ''} 
                             onClick={() => handleSizeSelect('familiar')}>Familiar $20</button>
                        </div>
                        <p>Precio: ${precioActual}</p>
                        <div className="quantity-controls">
                            <button onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}>-</button>
                            <span className='quantity-number'>{cantidad}</span>
                            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
                        </div>
                        <button className='add-to-cart-button' onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
                        <button className='close-button' onClick={() => setModalVisible(false)}>Cerrar</button>

                    </div>

                </div>
            )}
        </section>
    );
}

export default Menu;
