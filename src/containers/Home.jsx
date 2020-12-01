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
      <Header />
      <Hero />
      <Projects />
      <News />
      <Footer />
    </>
  )
}

export default Home;
