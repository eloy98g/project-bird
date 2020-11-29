import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/containers/Home.scss';
import Projects from '../components/Projects';
import News from '../components/News';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <News />
    </>
  )
}

export default Home;
