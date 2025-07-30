import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Github, Linkedin, Send } from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mvowwkry");

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <h2 className="section-title">
          Get In Touch
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Thank you!</h3>
            <p className="contact-description">
              Thanks for reaching out! I'll get back to you soon.
            </p>
            <div className="contact-links">
              <a
                href="mailto:muhaimin.jobayer@gmail.com"
                className="contact-link"
              >
                <Mail size={20} />
                muhaimin.jobayer@gmail.com
              </a>
              <a
                href="https://github.com/mmj05"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Github size={20} />
                github.com/mmj05
              </a>
              <a
                href="https://www.linkedin.com/in/muhaimin-jobayer/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Linkedin size={20} />
                linkedin.com/in/muhaimin-jobayer
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">
        Get In Touch
      </h2>

      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's work together</h3>
          <p className="contact-description">
            I'm actively seeking opportunities to join a forward-thinking team
            where I can contribute my skills and passion for creating
            exceptional software. Whether you have a position available or just
            want to chat about technology, I'd love to hear from you!
          </p>

          <div className="contact-links">
            <a
              href="mailto:muhaimin.jobayer@gmail.com"
              className="contact-link"
            >
              <Mail size={20} />
              muhaimin.jobayer@gmail.com
            </a>
            <a
              href="https://github.com/mmj05"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github size={20} />
              github.com/mmj05
            </a>
            <a
              href="https://www.linkedin.com/in/muhaimin-jobayer/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin size={20} />
              linkedin.com/in/muhaimin-jobayer
            </a>
          </div>
        </div>

        <div className="contact-form-container glass-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or just say hello!"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting} className="btn-primary submit-btn">
              <Send size={18} />
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
