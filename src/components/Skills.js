import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      title: 'Design & UI/UX',
      skills: ['Figma', 'UI Design', 'UX Design', 'Prototyping', 'Wireframing', 'Design Systems']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'VS Code']
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
