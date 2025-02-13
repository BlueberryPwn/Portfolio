import "../styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <Link to="hero" smooth>
        Home
      </Link>
      <Link to="about" smooth>
        About
      </Link>
      <Link to="skills" smooth>
        Skills
      </Link>
      <Link to="projects" smooth>
        Projects
      </Link>
      <Link to="contact" smooth>
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
