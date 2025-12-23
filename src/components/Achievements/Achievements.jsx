import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Research Presenter – ICERI 2025',
      description: 'Presented a research paper on “Fingerprint-Based Attendance App” at the 9th International Conference on Engineering Research and Innovations (ICERI-2025)',
      icon: '🏆',
      link: 'https://www.linkedin.com/in/ritikajaiswal0115/details/certifications/1759199854980/single-media-viewer/?profileId=ACoAAETnuF4B3XwUXarnBOzAIlGqTzSe_RH8D8s',
    },
    {
      id: 2,
      title: 'IBM SkillsBuild – AI Agent Architect Training',
      description: 'Completed a 4-week project-based learning program on Agentic AI: From Learner to Builder, conducted in collaboration with CSRBOX and IBM SkillsBuild',
      icon: '🚀',
    },
    {
      id: 3,
      title: 'FYND 24-Hour Hacktimus Hackathon – Finalist',
      description: 'Selected as a FYND Hackathon Finalist from 42 shortlisted participants and delivered a working prototype within 24 hours',
      icon: '🥇',
      link: 'https://www.linkedin.com/in/ritikajaiswal0115/overlay/1766473139269/single-media-viewer/?profileId=ACoAAETnuF4B3XwUXarnBOzAIlGqTzSe_RH8D8s',
    },
    {
      id: 4,
      title: 'TCS iON Career Edge – Young Professional',
      description: 'Completed a professional development program covering communication skills, presentation skills, interview skills, business etiquette, IT foundations, and an overview of artificial intelligence',
      icon: '⚡',
      link: 'https://www.linkedin.com/in/ritikajaiswal0115/details/certifications/1750162922805/single-media-viewer/?profileId=ACoAAETnuF4B3XwUXarnBOzAIlGqTzSe_RH8D8s',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Key <span className="highlight">Achievements</span>
        </h2>

        <div className="roadmap">
          <div className="roadmap-path" aria-hidden="true"></div>
          <ul className="roadmap-list">
            {achievements.map((achievement, index) => {
              const isActive = activeIndex === index || hoverIndex === index;
              return (
                <li key={achievement.id} className={`roadmap-item animate-fade-in-up ${index % 2 === 0 ? 'above' : 'below'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className={`roadmap-card${isActive ? ' roadmap-card-active' : ''}`}>
                        <h3 className="roadmap-title">{achievement.title}</h3>
                        <p className="roadmap-desc">{achievement.description}</p>
                        <a
                          className="roadmap-link"
                          href={achievement.link ? achievement.link : '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View more"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.828 9.172a4 4 0 0 1 0 5.656l-4 4a4 4 0 1 1-5.656-5.656l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414a2 2 0 1 0 2.828 2.828l4-4a2 2 0 1 0-2.828-2.828 1 1 0 1 1-1.414-1.414 4 4 0 0 1 5.656 0Zm-5.656 5.656Zm7.778-7.778a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a2 2 0 1 0-2.828-2.828l-4 4a2 2 0 1 0 2.828 2.828 1 1 0 1 1 1.414 1.414 4 4 0 0 1-5.656-5.656l4-4a4 4 0 1 1 5.656 5.656Z"/></svg>
                        </a>
                      </div>
                      <div
                        className="roadmap-dot"
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="roadmap-icon" role="img" aria-label="icon">{achievement.icon}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="roadmap-dot"
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="roadmap-icon" role="img" aria-label="icon">{achievement.icon}</span>
                      </div>
                      <div className={`roadmap-card${isActive ? ' roadmap-card-active' : ''}`}>
                        <h3 className="roadmap-title">{achievement.title}</h3>
                        <p className="roadmap-desc">{achievement.description}</p>
                        <a
                          className="roadmap-link"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View more"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M14.828 9.172a4 4 0 0 1 0 5.656l-4 4a4 4 0 1 1-5.656-5.656l1.414-1.414a1 1 0 1 1 1.414 1.414l-1.414 1.414a2 2 0 1 0 2.828 2.828l4-4a2 2 0 1 0-2.828-2.828 1 1 0 1 1-1.414-1.414 4 4 0 0 1 5.656 0Zm-5.656 5.656Zm7.778-7.778a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a2 2 0 1 0-2.828-2.828l-4 4a2 2 0 1 0 2.828 2.828 1 1 0 1 1 1.414 1.414 4 4 0 0 1-5.656-5.656l4-4a4 4 0 1 1 5.656 5.656Z"/></svg>
                        </a>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
