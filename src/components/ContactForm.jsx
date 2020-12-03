import React from 'react';
import '../styles/components/ContactForm.scss';

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-title">
          <p>Hey! Cuéntanos más sobre tu proyecto</p>
        </div>
        <div className="contact-form">
          <div className="form-interests">
            <p>Estoy interesado en...</p>
            <div className="interest-buttons">
              <button className='interest-button' type='button'>Branding</button>
              <button className='interest-button' type='button'>Mobile</button>
              <button className='interest-button' type='button'>WebApp</button>
              <button className='interest-button' type='button'>Estrategia</button>
              <button className='interest-button' type='button'>UX / UI</button>
              <button className='interest-button' type='button'>Diseño gráfico</button>
              <button className='interest-button' type='button'>Producto</button>
              <button className='interest-button' type='button'>Otros</button>
            </div>
          </div>
          <div className="form-personal-data">
            <p>Tu nombre</p>
            <input className="text-input" type="text" placeholder="Nombre" />
            <p>Tu email</p>
            <input className="text-input" type="text" placeholder="Email" />
          </div>
          <div className="form presupuesto">
            <p>Presupuesto en euros</p>
            <button className='interest-button' type='button'>dinero</button>
          </div>
          <div className="form-tellus">
            <p>Cuéntanos todo</p>
            <input className="text-input" type="text" placeholder="Tu idea" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

// <input type="button" value="Click me" />