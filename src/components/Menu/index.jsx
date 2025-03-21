import React from 'react';
import './style.css';
import { getPizzasArray } from '../../data/pizzasData';

function Menu() {
    const pizzas = getPizzasArray();
    return (
        <section className="menu-section">
            <h2>Nuestro Menú</h2>
            <div className="menu-grid">
                {pizzas.map((pizza)=>{
                    return(
                        <div className="pizza-card" key={pizza.id}>
                            <img src={pizza.imagen} alt={pizza.nombre} />
                            <h3>{pizza.nombre}</h3>
                            <p>{pizza.ingredientes.join(', ')}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Menu;
