import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sintenedor Pizzería</h3>
          <p>Las mejores pizzas artesanales de la ciudad</p>
        </div>
        <div className="footer-section">
          <h3>Horario</h3>
          <p>Lunes a Viernes: 11:00 - 23:00</p>
          <p>Sábados y Domingos: 12:00 - 00:00</p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@sintenedor.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sintenedor. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer 