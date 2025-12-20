import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ticTacToeImg from '../../assets/images/tictactoe.png';
import weatherImg from '../../assets/images/weather.png';
import bgColorImg from '../../assets/images/bgcolor.png';
import mlProjectsImg from '../../assets/images/MLprojects.png';
import django from '../../assets/images/django.png'
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (projectId) => {
    setFlippedCards(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };
  const projects = [
    {
      id: 1,
      title: 'Django Authentication System',
      description: 'Developed a secure Django-based authentication system with user signup, login, logout, session management, and SMTP-enabled email password reset functionality.',
      tech: ['Python', 'Django', 'HTML/CSS', 'SQLite','SMTP (Email)', 'REST APIs'],
      link: 'https://djangoapp.pythonanywhere.com/ulogin',
      github: 'https://github.com/ritikajaiswal02/Django_Authentication_System',
      image: django,
    },
    {
      id: 2,
      title: 'Machine Learning Projects',
      description: 'Collection of end-to-end ML projects including Car Price Prediction, Social Network Ads Classification, Lung Cancer Prediction, and Air Quality Clustering. Built with Python, Flask, and deployed on PythonAnywhere.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'ML Algorithms'],
      link: '/ml-projects',
      github: 'https://github.com/ritikajaiswal02/ML_projects',
      image: mlProjectsImg,
    },
    {
      id: 3,
      title: 'BG Color App',
      description: 'Background color app built with React that lets you quickly switch and preview hues in a clean UI.',
      tech: ['React'],
      link: 'https://bg-color-app-mauve.vercel.app/',
      github: 'https://github.com/ritikajaiswal02/bgColorApp',
      image: bgColorImg,
    },
    {
      id: 4,
      title: 'Tic Tac Toe Game',
      description:
        'Neon-styled Tic Tac Toe built with React + Tailwind CSS. Turn-based X/O play with smart win and tie detection, responsive layout, and glowing text-shadow UI.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: 'https://tic-tac-toe-five-swart-57.vercel.app/',
      github: 'https://github.com/ritikajaiswal02/TicTacToe',
      image: ticTacToeImg,
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'Responsive weather dashboard built with React + Tailwind CSS, using real-time data from OpenWeatherMap API. Features geolocation-based weather, city search, and global state via React Context. (Feb 2025)',
      tech: ['React', 'Tailwind CSS', 'OpenWeatherMap API', 'Context API'],
      link: 'https://weather-app-woad-psi.vercel.app/',
      github: 'https://github.com/ritikajaiswal02/Weather-App',
      image: weatherImg,
    },
    {
      id: 6,
      title: 'Many More to come...',
      //description: 'Loading......',
      tech: ['Loading'],
      //link: '#',
      //image: 'https://via.placeholder.com/400x300?text=Notifications',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Featured <span className="highlight">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`project-card animate-fade-in-up ${flippedCards.includes(project.id) ? 'flipped' : ''}`}
              onClick={() => handleCardClick(project.id)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-link">
                  {project.isRoutePage ? (
                    <button 
                      onClick={() => navigate(project.link)} 
                      className="project-link__primary"
                      style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                      <span className="project-link__left">
                        <span className="project-link__text">View Project</span>
                        <span className="project-link__arrow">→</span>
                      </span>
                    </button>
                  ) : (
                    <a href={project.link} className="project-link__primary" target="_blank" rel="noreferrer">
                      <span className="project-link__left">
                        <span className="project-link__text">View Project</span>
                        <span className="project-link__arrow">→</span>
                      </span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="project-link__github" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                      <svg
                        className="project-link__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.78 2.72 1.27 3.39.97.11-.76.41-1.27.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.7.42.36.8 1.09.8 2.2 0 1.59-.02 2.88-.02 3.27 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <button className="btn btn-neon">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
