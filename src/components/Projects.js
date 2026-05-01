import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Minimalist portfolio showcasing design and development work',
      tags: ['React', 'CSS3', 'Responsive Design'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts',
      tags: ['React', 'Chart.js', 'API Integration'],
      link: '#'
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'Real-time weather app with location-based forecasts',
      tags: ['JavaScript', 'REST API', 'Geolocation'],
      link: '#'
    },
    {
      id: 6,
      title: 'Design System',
      description: 'Comprehensive UI component library and design guidelines',
      tags: ['Figma', 'Design System', 'Documentation'],
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
