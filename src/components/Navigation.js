import React, { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Gabriel S. Mariano</span>
        </div>
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About Me</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
          <li><button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button></li>
          <li><button onClick={() => scrollToSection('education')} className="nav-link">Education</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;