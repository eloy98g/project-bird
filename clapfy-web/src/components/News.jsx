import React from 'react';
import '../styles/components/News.scss';

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="banner">
          <p>últimas</p>
          <p className="subtitle">noticias</p>
        </div>
        <div className="news-container">
          <img src="/" alt="" className="background-img" />
          <div className="blogs">
            <div className="blog-post selected">
              <p className="title">Cómo mejorar la vida de tus usuarios y aumentar tus ingresos</p>
              <p className="date">22 de noviembre</p>
            </div>
            <div className="blog-post">
              <p className="title">El stack MERN está de moda. ¿Es esto una casualidad?</p>
              <p className="date">18 de octubre</p>
            </div>
            <div className="blog-post">
              <p className="title">A nadie le gusta lo que no se mueve. Aplica motion design.</p>
              <p className="date">08 de septiembre</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News;
