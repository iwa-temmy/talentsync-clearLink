import { GoChevronDown } from "react-icons/go";
import "./style.scss";

const Header = () => {
  return (
    <nav className="section header">
      <div className="nav">
        <img src="/brand/full-logo.svg" className="logo" alt="clearLink logo" />
        <ul className="center-nav">
          <li>
            Products <GoChevronDown />
          </li>
          <li>
            Solutions <GoChevronDown />
          </li>
          <li>
            Resources <GoChevronDown />
          </li>
          <li>Pricing</li>
        </ul>

        <div className="cta-buttons">
          <button id="talk-to-sales">Talk to sales</button>
          <button id="sign-up">Sign up for free</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
