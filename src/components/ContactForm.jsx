/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, /* useContext */ } from 'react';
import '../styles/components/ContactForm.scss';
import FormButton from '../widgets/FormButton';
import BudgetButton from '../widgets/BudgetButton';
import arrayRemove from '../utils/ArrayRemove';

// import AppContext from '../context/AppContext';

const ContactForm = () => {
  // const { state, addContact } = useContext(AppContext);
  const form  =  useRef(null);

  let interests = [];
  // let budget = '';

  const handleButton = (elementId) => {
    const element = document.getElementById(elementId);
    if(element.classList.contains('selected')){
      element.classList.remove('selected');
      interests = arrayRemove(interests, elementId);
    }else{
      element.classList.add('selected');
      interests.push(elementId);
    }
    console.log(interests);
  }

  // const handleSubmit = () =>{
  //   const formData = new FormData(form.current);
  //   const contact = {
  //     //'interests': interests,
  //     'name': formData.get('name'),
  //     'email': formData.get('email'),
  //     //'budget': budget,
  //     'idea': formData.get('idea'),
  //   }
  //   console.log(contact);
  // }

  return (
    <div className="contact">
      <div className="container">
        <div className="form-title">
          <p>Hey! &#x1F44B;	Cuéntanos más sobre tu proyecto</p>
        </div>
        <div ref={form} className="contact-form">
          <div className="form-interests">
            <p>Estoy interesado en...</p>
            <div className="interest-buttons">
              <FormButton name='Branding' handleButton={handleButton}/* interests={interests} */ />
              <FormButton name='Mobile' handleButton={handleButton} />
              <FormButton name='WebApp' handleButton={handleButton} />
              <FormButton name='Estrategia' handleButton={handleButton} />
              <FormButton name='UX / UI' handleButton={handleButton} />
              <FormButton name='Diseño gráfico' handleButton={handleButton} />
              <FormButton name='Producto' handleButton={handleButton} />
              <FormButton name='Otros' handleButton={handleButton} />
            </div>
          </div>
          <form className="form-personal-data">
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
          </form>
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
          <button className="submit" type='button' /* onClick={handleSubmit} */ >Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
