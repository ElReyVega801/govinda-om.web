import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta
import logo from '../../images/LOGO.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand"> {/* Cambia a Link */}
          <img src={logo} alt="GOVINDA OM Logo" className="navbar-logo" />
          GOVINDA OM
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link> {/* Cambia a Link */}
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">Conócenos</Link> {/* Cambia a Link */}
          </li>
          <li className="navbar-item">
            <Link to="/courses" className="navbar-link">Cursos</Link> {/* Cambia a Link */}
          </li>
          <li className="navbar-item">
            <Link to="/store" className="navbar-link">Tienda</Link> {/* Cambia a Link */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
