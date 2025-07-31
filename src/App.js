import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';
import ProjectPage from './components/ProjectPage/ProjectPage';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MobileMenu from './components/MobileMenu/MobileMenu';
import { projects } from './data/projects';
import { skills } from './data/skills';
import './styles/globals.css';

const PortfolioWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToProject = (project) => {
    setSelectedProject(project);
    setCurrentPage('project');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const navigateToHomeProjects = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    // Use setTimeout to ensure the DOM is updated before scrolling
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        // Calculate offset to account for fixed navigation bar
        const navbar = document.querySelector('.navigation');
        const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px
        const elementPosition = element.offsetTop - navbarHeight - 20; // Add 20px buffer
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed navigation bar
      const navbar = document.querySelector('.navigation');
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px
      const elementPosition = element.offsetTop - navbarHeight - 20; // Add 20px buffer
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
      {/* Cursor Effects */}
      <div 
        className="cursor-dot"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4
        }}
      />
      <div 
        className="cursor-ring"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20
        }}
      />

      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Page Content */}
      {currentPage === 'home' ? (
        <HomePage
          projects={projects}
          skills={skills}
          navigateToProject={navigateToProject}
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrolled={scrolled}
        />
      ) : (
        <ProjectPage
          project={selectedProject}
          navigateToHome={navigateToHomeProjects}
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </div>
  );
};

export default PortfolioWebsite;