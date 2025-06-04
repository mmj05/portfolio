import React from 'react';
import Navigation from '../Navigation/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import SkillsSection from '../SkillsSection/SkillsSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = ({ 
  projects, 
  skills, 
  navigateToProject, 
  scrollToSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrolled, 
  formData, 
  handleFormSubmit, 
  handleInputChange 
}) => {
  return (
    <div className="homepage">
      <Navigation 
        scrollToSection={scrollToSection}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <ProjectsSection 
        projects={projects} 
        navigateToProject={navigateToProject} 
      />
      
      <SkillsSection skills={skills} />
      
      <ContactSection 
        formData={formData}
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      
      <Footer />
    </div>
  );
};

export default HomePage; 