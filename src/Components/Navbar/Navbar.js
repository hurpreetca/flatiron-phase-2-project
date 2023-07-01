import React from "react";
import { Link } from "react-router-dom";
import "/Users/harpreetsingh/Development/code/phase-2/flatiron-phase-2-project/src/Components/Navbar/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="brand">
        Ghibli Archives
      </Link>
      <ul className="nav_menu">
        <li className="nav_item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li className="nav_item">
          <Link to="/form" className="nav-link">
            Form
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
