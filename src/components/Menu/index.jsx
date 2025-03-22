import React from 'react';
import './style.css';
import { getPizzasArray } from '../../data/pizzasData';
import { useState } from 'react';




function Menu() {
    //Declaracion de estados
    const [modalVisible,setModalVisible]= useState(false);
    const [pizzaSeleccionada,setPizzaSeleccionada]= useState(null);
    const [tamañoSeleccionado,setTamañoSeleccionado]= useState('personal');
    const [precioActual,setPrecioActual]=useState(10);
    // Declaracion de la funcion handlePizzaclick
    const handlePizzaClick=(pizza)=>{
        setPizzaSeleccionada(pizza);
        setModalVisible(true);
        setPrecioActual(pizza.precios[tamañoSeleccionado]);
        console.log(pizza);
    }
    const pizzas = getPizzasArray();
    return (
        <section className="menu-section">
            <h2>Nuestro Menú</h2>
            <div className="menu-grid">
                {pizzas.map((pizza)=>{
                    return(
                        <div onClick={()=>handlePizzaClick(pizza)} className="pizza-card" key={pizza.id}>
                            <h3>{pizza.nombre}</h3>
                            <img src={pizza.imagen} alt={pizza.nombre} />
                            
                            
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Menu;
