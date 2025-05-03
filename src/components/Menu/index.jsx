import { useCarrito } from '../../context/CarritoContext'
import pizzas from '../../data/pizzasData'
import './style.css'

const Menu = () => {
  const { agregarAlCarrito } = useCarrito()

  return (
    <div className="menu">
      <h2>Nuestras Pizzas</h2>
      <div className="pizzas-grid">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.imagen} alt={pizza.nombre} />
            <h3>{pizza.nombre}</h3>
            <p>{pizza.descripcion}</p>
            <div className="pizza-footer">
              <span className="precio">${pizza.precio}</span>
              <button onClick={() => agregarAlCarrito(pizza)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu 