import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="../images/LOGO.jpg" alt="GOVINDA OM Logo" className="navbar-logo" />
          GOVINDA OM
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">Conócenos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/courses" className="navbar-link">Cursos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/store" className="navbar-link">Tienda</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
