import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1 className="logo-text">RITIKA</h1>
            </Link>
          </div>

          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li>
              <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            {location.pathname === '/' && (
              <>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="nav-link"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="nav-link"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="nav-link"
                  >
                    Skills
                  </button>
                </li>
              </>
            )}
            {location.pathname === '/' && (
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="nav-link"
                >
                  Contact
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
