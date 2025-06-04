import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './SkillsSection.css';

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        Skills & <span className="gradient-text">Expertise</span>
      </h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection; 