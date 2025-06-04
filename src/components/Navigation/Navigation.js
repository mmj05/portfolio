import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ scrollToSection, scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`navigation ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          Muhaimin.
        </div>
        
        <div className="desktop-nav">
          <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <div className="social-links">
            <a href="mailto:muhaimin.jobayer@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
            <a href="https://github.com/mmj05" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhaimin-jobayer/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 