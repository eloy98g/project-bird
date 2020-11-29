import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/containers/Home.scss';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
    </>
  )
}

export default Home;
