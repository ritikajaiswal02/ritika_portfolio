import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Crafting digital experiences through code and creativity.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow</h3>
            <div className="footer-socials">
              <a href="https://github.com/ritikajaiswal02/" target='_blank' className="footer-social">GitHub</a>
              <a href="https://www.linkedin.com/in/ritikajaiswal0115/" target='_blank' className="footer-social">LinkedIn</a>
              {/* <a href="#" className="footer-social">Twitter</a> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ritika Jaiswal. All rights reserved.</p>
          <p>Designed & Built with <span className="highlight">💜</span> by Ritika</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
