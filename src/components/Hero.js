import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Gaxz-hub</span></h1>
        <p className="hero-subtitle">Developer & Designer</p>
        <p className="hero-description">
          I create beautiful, functional digital experiences. Passionate about clean code, modern design, and solving complex problems.
        </p>
        <div className="hero-ctas">
          <a href="mailto:contact@gaxz-hub.dev" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
