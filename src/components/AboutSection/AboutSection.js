import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        About <span className="gradient-text">Me</span>
      </h2>
      
      <div className="about-content">
        <div className="about-text glass-card">
          <p className="about-greeting">
            Greetings! I am <span className="highlight-name">Muhaimin</span>, a full-stack software engineer with a focus on React, TypeScript, Java, Spring Boot, and proficient database management using PostgreSQL. My passion lies in crafting seamless user interfaces and architecting robust backend systems, addressing the complexities of modern web development.
          </p>
          
          <p className="about-description">
            I bring a unique blend of academic knowledge and hands-on experience from personal projects and bootcamp training. Over the course of my career, I have continuously honed my skills in various aspects of web development and design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 