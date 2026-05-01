import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Gaxz-hub</div>
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <a href="mailto:contact@gaxz-hub.dev" className="cta-button">Get In Touch</a>
        </nav>
        <button 
          className="hamburger" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
