import React from 'react';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroBg} alt="Hero Background" className="hero-bg" />
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Sanchit Kumar</h1>
          <p className="hero-subtitle">Videographer & Digital Content Specialist</p>
          <a href="#projects" className="btn btn-primary">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
