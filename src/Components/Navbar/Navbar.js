import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        Ghibli Archives
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/form" className="nav-link">
            Form
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
