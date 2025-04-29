import React from 'react';
import './style.css';


const Footer = () => {
  return (
    <footer className="footer">
        {/* Sección de información de contacto */}
        <div className="footer-contacto">
          <h4>Contacto</h4>
          <ul>
            <li>Dirección: Calle Ejemplo 123</li>
            <li>Teléfono: 555-555-5555</li>
            <li>Correo electrónico: <a href="mailto:info@pizzeria.com">info@pizzeria.com</a></li>
          </ul>
        </div>
        
        {/* Sección de redes sociales */}
        <div className="footer-redes">
          <h4>Síguenos</h4>
          <ul>
            <li><a href="https://www.instagram.com/pizzeria" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/pizzeria" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/pizzeria" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
         {/* Sección de certificaciones y seguridad */}
         <div className="footer-seguridad">
          <h4>certificaciones</h4>
          <ul>
            <li><img src="logo-ssl.png" alt="SSL" /></li>
            <li><img src="logo-paypal.png" alt="PayPal" /></li>
          </ul>
        </div>
        {/* Copyright y derechos de autor */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Sintenedor. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;