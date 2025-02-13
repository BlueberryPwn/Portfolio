import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="navbar-toggle">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="hero" smooth>
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="about" smooth>
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="skills" smooth>
            Skills
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="projects" smooth>
            Projects
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="contact" smooth>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
