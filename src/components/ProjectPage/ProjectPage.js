import React from 'react';
import { ArrowLeft, ExternalLink, Github, ChevronRight, Smartphone, Monitor, Globe, Mail, Linkedin, CheckCircle } from 'lucide-react';
import Footer from '../Footer/Footer';
import './ProjectPage.css';

const ProjectPage = ({ project, navigateToHome, scrolled, isMenuOpen, setIsMenuOpen }) => {
  const getDeviceIcon = (type) => {
    switch (type) {
      case 'mobile':
        return <Smartphone size={24} color="#0f0f23" />;
      case 'tablet':
        return <Monitor size={24} color="#0f0f23" />;
      default:
        return <Globe size={24} color="#0f0f23" />;
    }
  };

  return (
    <div className="project-page">
      {/* Navigation for Project Page */}
      <nav className={`project-navigation ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="project-nav-container">
          <div className="project-logo">
            Portfolio
          </div>
          
          <div className="desktop-nav">
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

      <div className="project-content-container">
        {/* Back Button */}
        <button
          onClick={navigateToHome}
          className="btn-secondary back-button"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="project-header">
          <div className="project-category-label">
            {project.category}
          </div>
          
          <h1 className="project-main-title">
            {project.title}
          </h1>
          
          <p className="project-long-description">
            {project.description}
          </p>

          <div className="project-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={18} />
              Source Code
            </a>
          </div>

          <div className="project-tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag large-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges Section */}
        {project.challenges && (
          <div className="challenges-section">
            <h2 className="section-subtitle">
              <span className="gradient-text">Challenges</span> & Problem Solving
            </h2>
            <div className="challenge-solution-content glass-card">
              <div className="challenge-part">
                <h3 className="subsection-title">The Challenge</h3>
                <p className="challenge-text">{project.challenges}</p>
              </div>
              {project.solution && (
                <div className="solution-part">
                  <h3 className="subsection-title">The Solution</h3>
                  <p className="solution-text">{project.solution}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-subtitle">
            Key <span className="gradient-text">Features</span>
          </h2>
          
          <div className="features-list">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-item-compact">
                <CheckCircle size={16} color="#64ffda" className="feature-check" />
                <span className="feature-text-compact">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="screenshots-section">
          <h2 className="section-subtitle">
            Screenshots & <span className="gradient-text">Preview</span>
          </h2>
          
          <div className="screenshot-grid">
            {project.screenshots.map((screenshot) => (
              <div key={screenshot.id} className="screenshot-item">
                <div className="device-icon">
                  {getDeviceIcon(screenshot.type)}
                </div>
                <h4 className="screenshot-title">
                  {screenshot.type.charAt(0).toUpperCase() + screenshot.type.slice(1)} View
                </h4>
                <p className="screenshot-description">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <div className="more-projects">
          <h3 className="more-projects-title">
            Explore More <span className="gradient-text">Projects</span>
          </h3>
          <button onClick={navigateToHome} className="btn-primary">
            View All Projects
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage; 