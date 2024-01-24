import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import "./style.scss";

const FooterExtension = () => {
  return (
    <div className="footer-extension">
      <div className="section content">
        <p className="copyright">&copy; 2023 ClearLink. All rights reserved</p>
        <div className="socials">
          <FaLinkedin />
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default FooterExtension;
