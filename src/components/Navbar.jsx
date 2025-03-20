import "../styles/Navbar.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const menuToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  const closeMenu = () => {
    setExpandNavbar(false);
  };

  return (
    <header>
      <nav className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="navbar-toggle">
          <button type="button" onClick={menuToggle}>
            {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
        <div className="navbar-links">
          <a className="navbar-link" href="#hero" onClick={closeMenu}>
            Home
          </a>
          <a className="navbar-link" href="#about" onClick={closeMenu}>
            About
          </a>
          <a className="navbar-link" href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a className="navbar-link" href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a className="navbar-link" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
