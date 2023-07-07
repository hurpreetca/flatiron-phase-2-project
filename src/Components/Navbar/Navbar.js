import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { SiThemoviedatabase } from "react-icons/si";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        <SiThemoviedatabase className="logo" />
        GHIBLI Archive
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
