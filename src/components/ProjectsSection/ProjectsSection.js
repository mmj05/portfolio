import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = ({ projects, navigateToProject }) => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        Featured Projects
      </h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={navigateToProject}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection; 