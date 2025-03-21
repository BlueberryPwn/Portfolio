import "../styles/Hero.css";
import React from "react";

const HeroItem = ({ image, alt, link }) => {
  const handleLink = () => {
    window.open(link);
  };

  return (
    <img
      className="hero__socials__item"
      onClick={handleLink}
      src={image}
      alt={alt}
    ></img>
  );
};

export default HeroItem;
