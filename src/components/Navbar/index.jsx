import { useCarrito } from '../../context/CarritoContext'
import './style.css'

const Navbar = ({ toggleCart }) => {
  const { carrito } = useCarrito()
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://via.placeholder.com/150x50?text=Sintenedor" alt="Logo Sintenedor" />
      </div>
      <div className="navbar-cart" onClick={toggleCart}>
        <span className="material-icons">shopping_cart</span>
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </div>
    </nav>
  )
}

export default Navbar 