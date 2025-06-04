import React from 'react';
import { X } from 'lucide-react';
import './MobileMenu.css';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
      <button
        onClick={() => setIsMenuOpen(false)}
        className="close-button"
      >
        <X size={30} />
      </button>
      <nav className="mobile-nav">
        <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</button>
        <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
        <button onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</button>
        <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
      </nav>
    </div>
  );
};

export default MobileMenu; 