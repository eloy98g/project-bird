/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <p className="title">mejores</p>
        <p className="subtitle">proyectos</p>
        <div className="projects-grid">
          <figure className="project-item">
            <a href="/">
              <img src="" alt="" className="project-item__banner" />
              <figcaption className="project-item__desc">
                <p className="name">Wacanda</p>
                <p className="desceiption">Poniendo Last-Mile Delivery en África Septentrional</p>
                <p className="services">Branding, Product Design</p>
              </figcaption>
            </a>
          </figure>
          <figure className="project-item">
            <a href="/">
              <img src="" alt="" className="project-item__banner" />
              <figcaption className="project-item__desc">
                <p className="name">Fundación infantil Ronald McDonald</p>
                <p className="desceiption">Ayudando a McDonald's a cuidar familias</p>
                <p className="services">UX Research, Product Design, Development</p>
              </figcaption>
            </a>
          </figure>
        </div>
        <p className="project-footer">Ver Todo</p>
      </div>
    </div>
  )
}

export default Projects
