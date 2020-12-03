/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <section className='Header'>
      <Link to='/'>
        <p className='Header-title'>Clapfy</p>
      </Link>
      <div className="Header-menu-container">
        <p className='Header-menu'>menu</p>
        <Link to='/contact'>
          <i className="fas fa-grip-lines burguer-button"></i>
        </Link>
      </div>
    </section>
  )
}

export default Header
