import "../styles/Hero.css";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => (
  <section id="hero">
    <h2 className="hero__title">Hi, my name is Nshoan.</h2>
    <p className="hero__description">I am a fullstack developer.</p>
    <div className="icon__button">
      <IconButton
        aria-label="visit"
        onClick={() => window.open("https://github.com/BlueberryPwn")}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="visit"
        onClick={() =>
          window.open("https://www.linkedin.com/in/nshoan-a-853878208/")
        }
      >
        <LinkedInIcon />
      </IconButton>
    </div>
  </section>
);

export default Hero;
