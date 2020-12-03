import React from 'react';
import '../styles/components/ContactForm.scss';

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-title">
          <p>Hey! &#x1F44B;	Cuéntanos más sobre tu proyecto</p>
        </div>
        <div className="contact-form">
          <div className="form-interests">
            <p>Estoy interesado en...</p>
            <div className="interest-buttons">
              <button className='interest-button' type='button'><p>Branding</p></button>
              <button className='interest-button-selected' type='button'><p>Mobile</p></button>
              <button className='interest-button' type='button'><p>WebApp</p></button>
              <button className='interest-button' type='button'><p>Estrategia</p></button>
              <button className='interest-button' type='button'><p>UX / UI</p></button>
              <button className='interest-button' type='button'><p>Diseño gráfico</p></button>
              <button className='interest-button-selected' type='button'><p>Producto</p></button>
              <button className='interest-button' type='button'><p>Otros</p></button>
            </div>
          </div>
          <div className="form-personal-data">
            <p className='section-title'>Tu nombre</p>
            <input className="text-input" type="text" placeholder="Nombre" />
            <p className='section-title'>Tu email</p>
            <input className="text-input" type="text" placeholder="Email" />
          </div>
          <div className="form-presupuesto">
            <p className='section-title'>Presupuesto en euros</p>
            <button className='presupuesto-button' type='button'>dinero</button>
          </div>
          <div className="form-tellus">
            <p className='section-title'>Cuéntanos todo</p>
            <textarea className="text-input-tellus" type="text" placeholder="Tu idea" />
          </div>
          <button className="submit" type='button'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

// <input type="button" value="Click me" />