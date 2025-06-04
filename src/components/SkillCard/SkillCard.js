import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card glass-card">
      <div className="skill-icon">
        {skill.icon}
      </div>
      
      <h3 className="skill-category">
        {skill.category}
      </h3>
      
      <ul className="skill-technologies-list">
        {skill.technologies.map((tech, index) => (
          <li key={index} className="skill-tech-item">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard; 