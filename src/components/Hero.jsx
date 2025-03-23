import "../styles/Hero.css";
import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <h1 className="hero__title">Hey, I'm Nshoan</h1>
      <h2 className="hero__description">
        Fullstack developer with a passion for all things technology
      </h2>
      <a className="hero__shortcut" href="#projects">
        Projects
      </a>
    </section>
  );
};

export default Hero;
