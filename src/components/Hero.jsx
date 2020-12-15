import React from 'react'
import bird from '../styles/static/bird.png';
import '../styles/components/Hero.scss';

const Hero = () => {
  return (
    <section className='Hero'>
      <div className='container'>
        <div className='Hero-image'>
          <img src={bird} alt="bird" />
        </div>
        <div className="Hero-text">
          <p className='bold'>Branding</p>
          <p className='bold'>Mobile</p>
          <p className='bold'>Web Apps</p>
          <p>Lo hacemos como nadie.</p>
        </div>
      </div>
      <div className='message'>
        <div className='message-container'>
          <p>Estudio de diseño de productos consistentes de principio a fin. Construimos servicios con el objetivo de captar el amor de tus usuarios.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
