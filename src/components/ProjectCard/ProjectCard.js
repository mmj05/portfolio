import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="project-card glass-card"
      onClick={() => onClick(project)}
    >
      <div 
        className="project-image"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
      </div>
      
      <div className="project-content">
        <div className="project-category">
          {project.category}
        </div>
        
        <h3 className="project-title">
          {project.title}
        </h3>
        
        <p className="project-description">
          {project.description}
        </p>
        
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-footer">
          <span className="view-details">
            View Details →
          </span>
          <div className="project-links">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              title="View Live Site"
            >
              <ExternalLink size={18} className="project-link-icon" />
            </a>
            
            {/* Handle multiple GitHub repositories */}
            {project.githubUrls ? (
              <>
                <a 
                  href={project.githubUrls.frontend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-frontend"
                  onClick={(e) => e.stopPropagation()}
                  title="Frontend Repository"
                >
                  <Github size={14} className="project-link-icon" />
                  <span className="repo-label">FE</span>
                </a>
                <a 
                  href={project.githubUrls.backend} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-backend"
                  onClick={(e) => e.stopPropagation()}
                  title="Backend Repository"
                >
                  <Github size={14} className="project-link-icon" />
                  <span className="repo-label">BE</span>
                </a>
              </>
            ) : (
              /* Single GitHub repository */
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-frontend"
                onClick={(e) => e.stopPropagation()}
                title="GitHub Repository"
              >
                <Github size={14} className="project-link-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 