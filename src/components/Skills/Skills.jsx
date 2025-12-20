import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python','Java','C','MongoDB','SQL', 'Django','Flask','REST APIs'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Postman', 'Vs Code'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Creativity', 'Leadership'],
    },
  ];

  // Flatten all skills for the ticker
  const tickerSkills = skillCategories.flatMap((c) => c.skills);

  // Active circle category (hover/click)
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          My <span className="highlight">Skills</span>
        </h2>

        {/* Scrolling ticker like breaking news */}
        <div className="skills-ticker" aria-label="Scrolling list of skills">
          <div className="skills-ticker__track">
            {/* Duplicate the list twice to ensure seamless loop */}
            {[...Array(2)].map((_, dupIndex) => (
              <ul key={dupIndex} className="skills-ticker__list">
                {tickerSkills.map((skill, idx) => (
                  <li key={`${dupIndex}-${idx}`} className="skills-ticker__item">
                    <span className="skills-ticker__badge">{skill}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Circular categories */}
        <div className="skills-circles">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className={`skills-circle skills-circle--interactive ${activeCategory === cat.category ? 'is-active' : ''} animate-fade-in-up`}
              onMouseEnter={() => setActiveCategory(cat.category)}
              onMouseLeave={() => setActiveCategory(null)}
              onClick={() => setActiveCategory(prev => (prev === cat.category ? null : cat.category))}
            >
              <div className="skills-circle__center">{cat.category}</div>
              <div className="skills-circle__orbit">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className={`skills-dot skills-dot--${idx}`}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
