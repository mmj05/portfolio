import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greeting">Hi, I'm</span>
          Muhaimin Jobayer
        </h1>
        <p className="hero-description">
        I design, develop, and maintain scalable web applications with a focus on performance, usability, and clean architecture.
        </p>
        <button 
          className="btn-primary hero-cta"
          onClick={() => scrollToSection('projects')}
        >
          View My Work
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="scroll-indicator" onClick={() => scrollToSection('projects')}>
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-icon">
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 