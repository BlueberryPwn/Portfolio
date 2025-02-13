import "../styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const handleClick = () => {
    setExpandNavbar(false);
  };

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
          <Link
            to="hero"
            duration={1000}
            smooth={"easeOutQuint"}
            onClick={handleClick}
          >
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="about"
            duration={1000}
            smooth={"easeOutQuint"}
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="skills"
            duration={1000}
            smooth={"easeOutQuint"}
            onClick={handleClick}
          >
            Skills
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="projects"
            duration={1000}
            smooth={"easeOutQuint"}
            onClick={handleClick}
          >
            Projects
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="contact"
            duration={1000}
            smooth={"easeOutQuint"}
            onClick={handleClick}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
