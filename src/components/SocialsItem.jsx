import "../styles/Socials.css";
import React from "react";

const SocialsItem = ({ image, alt, link }) => {
  const handleLink = () => {
    window.open(link);
  };

  return (
    <img
      className="socials__item"
      onClick={handleLink}
      src={image}
      alt={alt}
    ></img>
  );
};

export default SocialsItem;
