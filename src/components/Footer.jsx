import React from 'react';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-main__dudas">
              <p className='dudas-title'>Si tienes una idea,</p>
              <u className='dudas-subtitle'>te ayudamos.</u>
            </div>
            <div className="footer-main__descubre">
              <p className='footer-section-title'>Descubre</p>
              <a href="/">Nosotros</a>
              <a href="/">Servicios</a>
              <a href="/">Trabajos</a>
              <a href="/">Contacto</a>
            </div>
            <div className="footer-main__encuentra">
              <p className="footer-section-title">Encuentra</p>
              <a href="https://goo.gl/maps/LqFfwmccHHe7F4Tu6">Calle Duque de Alba</a>
              <a href="https://goo.gl/maps/LqFfwmccHHe7F4Tu6">28012 Madrid</a>
            </div>
          </div>
          <div className="footer-company">
            <p>Clapfy</p>
            <p>Ⓒ 2020</p>
          </div>
          <div className="footer-law">
            <a href="/">Privacidad</a>
            <a href="/">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
