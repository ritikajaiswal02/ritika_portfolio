import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutGridRef.current) {
      observer.observe(aboutGridRef.current);
    }

    return () => {
      if (aboutGridRef.current) {
        observer.unobserve(aboutGridRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about-grid animate-fade-in-up" ref={aboutGridRef}>
        <div className="about-text">
          <h2>About Me</h2>
          <p className="about-body">
            I’m an AI & Full-Stack Developer with hands-on experience in Machine Learning, NLP, Python automation, Django, and the MERN stack. I enjoy building intelligent, scalable applications that combine data-driven models with modern web technologies.
          </p>
          <p className="about-body">
             Through projects, internships, and hackathons, I’ve worked on AI-powered systems, REST APIs, and full-stack solutions. <br />
             I’m passionate about continuous learning and applying AI to solve real-world problems with meaningful impact.
          </p>
        </div>

        <div className="about-timeline">
          <div className="timeline-line" aria-hidden="true"></div>

          <div className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-icon" aria-hidden="true">💻</div>
            <div className="timeline-text">
              <h3>AI & MACHINE LEARNING</h3>
              <p>Intelligent solutions built using Machine Learning and NLP for prediction, classification, automation, and real-world problem solving.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-icon" aria-hidden="true">📱</div>
            <div className="timeline-text">
              <h3>FULL-STACK WEB DEVELOPMENT</h3>
              <p>Scalable and responsive web applications developed using Django and MERN stack, focusing on performance and clean architecture.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-icon" aria-hidden="true">☁️</div>
            <div className="timeline-text">
              <h3>PYTHON AUTOMATION</h3>
              <p>Automation scripts and tools to simplify workflows, handle data processing, API interactions, and repetitive tasks efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
