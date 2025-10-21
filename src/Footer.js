
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:silpababu2005@gmail.com"><FaEnvelope className="icon" /></a>
      <a href="https://www.linkedin.com/in/silpa-babu-16b258315" target="_blank" rel="noreferrer"><FaLinkedin className="icon" /></a>
      <a href="https://github.com/shilpahhh" target="_blank" rel="noreferrer"><FaGithub className="icon" /></a>
      <p className="copy">© 2025 Silpa Babu</p>
    </footer>
  );
}

export default Footer;