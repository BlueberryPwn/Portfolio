import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <Link activeClass="active" smooth spy to="hero">
        Home
      </Link>
      <Link activeClass="active" smooth spy to="about">
        About
      </Link>
      <Link activeClass="active" smooth spy to="skills">
        Skills
      </Link>
      <Link activeClass="active" smooth spy to="projects">
        Projects
      </Link>
      <Link activeClass="active" smooth spy to="contact">
        Contact Me
      </Link>
    </div>
  </nav>
);

export default Navbar;
