/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/components/ContactForm.scss';
import FormButton from '../widgets/FormButton';
import BudgetButton from '../widgets/BudgetButton';

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
              <FormButton name='Branding' />
              <FormButton name='Mobile' />
              <FormButton name='WebApp' />
              <FormButton name='Estrategia' />
              <FormButton name='UX / UI' />
              <FormButton name='Diseño gráfico' />
              <FormButton name='Producto' />
              <FormButton name='Otros' />
            </div>
          </div>
          <div className="form-personal-data">
            <div className="form">
              <input 
                className="text-input" 
                type="text" 
                autoComplete='off'
                name='name'
                required
              />
              <label htmlFor='name' className='sub-section-title'>
                <span className="content-title">Nombre</span>
              </label>
            </div>
            <div className="form">
              <input 
                className="text-input" 
                type="text"
                autoComplete='off'
                name='email'
                required
              />
              <label htmlFor='email' className='sub-section-title'>
                <span className="content-title">Email</span>
              </label>
            </div>
          </div>
          <div className="form-presupuesto">
            <p className='section-title'>Presupuesto en euros</p>
            <BudgetButton />
          </div>
          <div className="form tellus">
            <textarea 
              className="text-input" 
              type="text" 
              name='idea'
              required
              autoComplete='off'
            />
            <label htmlFor='idea' className='sub-section-title'>
              <span className="content-title">Cuéntanos todo</span>
            </label>
          </div>
          <button className="submit" type='button'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
