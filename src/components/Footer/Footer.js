import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p className="footer-built">
          Designed & Built with <span className="heart">❤️</span> using React and lots of ☕️
        </p>

        <div className="footer-social-links">
          <a
            href="https://github.com/mmj05"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhaimin-jobayer/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:muhaimin.jobayer@gmail.com"
            className="footer-social-link"
          >
            <Mail size={24} />
          </a>
        </div>

        <p className="footer-copyright">
          © 2025 Muhaimin Jobayer. All rights reserved.
        </p>

        <p className="footer-email">muhaimin.jobayer@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
