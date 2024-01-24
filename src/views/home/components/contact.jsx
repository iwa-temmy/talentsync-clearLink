import { FaRegCircleCheck } from "react-icons/fa6";
import { trialOptions } from "../../../data";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-text">
        <p className="contact-header">
          Ready to clear the path to <br /> perfect communication?
        </p>
        <ul className="trial-options">
          {trialOptions.map((option, index) => (
            <li key={index}>
              <FaRegCircleCheck />
              {option}
            </li>
          ))}
        </ul>
        <div className="cta-buttons">
          <button className="outlined-btn">Talk to sales</button>
          <button className="primary-btn">Start your free trial</button>
        </div>
      </div>
      <div className="contact-image">
        <img src="/features.png" alt="features" />
      </div>
    </section>
  );
};

export default Contact;
