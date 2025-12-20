import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profileImage from '../../assets/images/profile.jpg';

const Hero = () => {
  const heroContainerRef = useRef(null);

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

    if (heroContainerRef.current) {
      observer.observe(heroContainerRef.current);
    }

    return () => {
      if (heroContainerRef.current) {
        observer.unobserve(heroContainerRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container" ref={heroContainerRef}>
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight"> <br />Ritika Jaiswal</span>
          </h1>
          <p className="hero-subtitle">
            AI Enthusiast · Machine Learning Developer · MERN Engineer
          </p>
          <p className="hero-description">
            I build intelligent, scalable products—MERN for web, Django for services, and ML/NLP to make
            experiences smarter. I also automate workflows with Python so teams ship faster.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-circle"></div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </a>
    </section>
  );
};

export default Hero;
