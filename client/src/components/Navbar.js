import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Portfolio</div>

        <div className="hamburger" onClick={toggleNav}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
