import React from 'react';
import Hero from '../components/Hero';
import '../styles/containers/Home.scss';
import Projects from '../components/Projects';
import News from '../components/News';

const Home = () => {
  return (
    <>
      <div className="window">
        <div className="window-content">
          <Hero />
          <Projects />
          <News />
        </div>
      </div>
    </>
  )
}

export default Home;
