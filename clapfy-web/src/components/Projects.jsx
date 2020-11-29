/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/components/Projects.scss';
import wacanda from '../styles/static/wacanda-banner.png';
import mcdonald from '../styles/static/mcdonald-banner.png';

const Projects = () => {
  return (
    <sectiom className="projects">
      <div className="container">
        <div className="banner">
          <p>mejores</p>
          <p className="subtitle">proyectos</p>
        </div>
        <div className="projects-grid">
          <figure className="project-item first">
            <a href="/">
              <img src={wacanda} alt="" className="project-item__banner" />
            </a>
            <figcaption className="project-item__desc">
              <p className="name">Wacanda</p>
              <p className="description">Poniendo Last-Mile Delivery en África Septentrional</p>
              <p className="services">Branding, Product Design</p>
            </figcaption>
          </figure>
          <figure className="project-item second">
            <a href="/">
              <img src={mcdonald} alt="" className="project-item__banner" />
            </a>
            <figcaption className="project-item__desc">
              <p className="name">Fundación infantil Ronald McDonald</p>
              <p className="description">Ayudando a McDonald's a cuidar familias</p>
              <p className="services">UX Research, Product Design, Development</p>
            </figcaption>
          </figure>
        </div>
        <div className="projects-footer">
          <a className='link' href="/">Ver todos</a>
        </div>
        
      </div>
    </sectiom>
  )
}

export default Projects
