import { useCarrito } from '../../context/CarritoContext'
import { CSSTransition } from 'react-transition-group'
import './style.css'

const Carrito = ({ isOpen, onClose }) => {
  const { carrito, eliminarDelCarrito, actualizarCantidad, calcularTotal } = useCarrito()

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="carrito"
      unmountOnExit
    >
      <div className="carrito-overlay">
        <div className="carrito-container">
          <div className="carrito-header">
            <h2>Tu Carrito</h2>
            <button className="cerrar-btn" onClick={onClose}>×</button>
          </div>
          
          <div className="carrito-items">
            {carrito.length === 0 ? (
              <p className="carrito-vacio">Tu carrito está vacío</p>
            ) : (
              carrito.map(item => (
                <div key={item.id} className="carrito-item">
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="item-info">
                    <h3>{item.nombre}</h3>
                    <p>${item.precio}</p>
                  </div>
                  <div className="item-cantidad">
                    <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                  </div>
                  <button 
                    className="eliminar-btn"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>

          {carrito.length > 0 && (
            <div className="carrito-footer">
              <div className="total">
                <span>Total:</span>
                <span>${calcularTotal().toFixed(2)}</span>
              </div>
              <button className="pagar-btn">Proceder al pago</button>
            </div>
          )}
        </div>
      </div>
    </CSSTransition>
  )
}

export default Carrito 