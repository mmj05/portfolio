import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './ContactSection.css';

const ContactSection = ({ formData, handleFormSubmit, handleInputChange }) => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-subtitle">
            Let's work together
          </h3>
          <p className="contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're a company looking to hire, or you're a fellow developer 
            who wants to collaborate, I'd love to hear from you.
          </p>
          
          <div className="contact-links">
            <a href="mailto:muhaimin.jobayer@gmail.com" className="contact-link">
              <Mail size={20} />
              muhaimin.jobayer@gmail.com
            </a>
            <a href="https://github.com/mmj05" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} />
              github.com/mmj05
            </a>
            <a href="https://www.linkedin.com/in/muhaimin-jobayer/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} />
              linkedin.com/in/muhaimin-jobayer
            </a>
          </div>
        </div>
        
        <div className="contact-form-container glass-card">
          <form onSubmit={handleFormSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell me about your project or just say hello!"
              />
            </div>
            
            <button type="submit" className="btn-primary submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 