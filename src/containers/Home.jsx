import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/containers/Home.scss';
import Projects from '../components/Projects';
import News from '../components/News';
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className="window">
        <Header />
        <div className="window-content">
          <Hero />
          <Projects />
          <News />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;
