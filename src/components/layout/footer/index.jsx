import { footerLinksGroup } from "../../../data";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="section">
      <div className="footer">
        <div className="footer-main">
          <img className="logo" src="/brand/full-logo.svg" alt="clearlink" />
          <p id="description">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="footer-link-groups">
          {footerLinksGroup.map((group, index) => {
            return (
              <div className="footer-link-group" key={index}>
                <h4 className="title">{group.title}</h4>
                <ul className="links">
                  {group.links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            )
          })}
          <div className="footer-link-group">
            <h4 className="title get-app">Get the app</h4>
            <ul className="links">
              <li><img src="/appstore-badge.png" alt="Apple store badge" /></li>
              <li><img src="/playstore-badge.png" alt="Playstore store badge" /></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
