import "../styles/Hero.css";
import React from "react";
import HeroItem from "./HeroItem";
import { SocialsList } from "../helpers/SocialsList";

const Hero = () => {
  return (
    <section id="hero">
      <h1 className="hero__title">Hi, I'm Nshoan.</h1>
      <h2 className="hero__description">
        Fullstack developer with a passion for all things technology
      </h2>
      <div className="hero__socials">
        {SocialsList.map((item) => {
          return (
            <HeroItem
              key={item.id}
              image={item.image}
              alt={item.alt}
              link={item.link}
            />
          );
        })}
      </div>
      <a className="hero__shortcut" href="#projects">
        Projects
      </a>
    </section>
  );
};

export default Hero;
