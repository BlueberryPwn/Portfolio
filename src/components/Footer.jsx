import "../styles/Footer.css";
import "../styles/Socials.css";
import SocialsItem from "./SocialsItem";
import { SocialsList } from "../helpers/SocialsList";

const Footer = () => (
  <footer className="footer">
    <div className="footer__socials">
      {SocialsList.map((item) => {
        return (
          <SocialsItem
            key={item.id}
            image={item.image}
            alt={item.alt}
            link={item.link}
          />
        );
      })}
    </div>

    <p className="footer__link">Nshoan Abdlwafa ©2025</p>
  </footer>
);

export default Footer;
