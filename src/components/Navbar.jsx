import "../styles/Navbar.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const handleMenuToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  const handleMenuExit = () => {
    setExpandNavbar(false);
  };

  return (
    <header>
      <nav className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="navbar-toggle">
          <button type="button" onClick={handleMenuToggle}>
            {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
        <div className="navbar-links">
          <a className="navbar-link" href="#hero" onClick={handleMenuExit}>
            Home
          </a>
          <a className="navbar-link" href="#about" onClick={handleMenuExit}>
            About
          </a>
          <a className="navbar-link" href="#skills" onClick={handleMenuExit}>
            Skills
          </a>
          <a className="navbar-link" href="#projects" onClick={handleMenuExit}>
            Projects
          </a>
          <a className="navbar-link" href="#contact" onClick={handleMenuExit}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
