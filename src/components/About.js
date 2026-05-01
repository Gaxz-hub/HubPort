import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer and designer with a love for creating clean, intuitive digital experiences. With expertise in both frontend development and UI/UX design, I bridge the gap between aesthetics and functionality.
            </p>
            <p>
              I believe in writing maintainable code, embracing modern technologies, and constantly learning. My approach combines technical excellence with user-centered design principles to deliver impactful solutions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
