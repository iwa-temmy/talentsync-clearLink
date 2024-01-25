import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { faqs } from "../../../data";

const Faq = () => {
  const [faqOpen, setFaqOpen] = useState(0);

  const toggleAccordion = (index) => {
    setFaqOpen((cur) => (cur === index ? null : index));
  };

  return (
    <section className="section faq">
      <div className="faq-info">
        <h5 className="faq-intro">Support</h5>
        <h2 className="faq-header">FAQs</h2>
        <p className="faq-description">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <span>chat to our friendly team.</span>
        </p>
      </div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div
            className={`${faqOpen === index ? "is-open" : "faq-item"}`}
            key={index}
          >
            <div className="faq-item-title">
              {faq.title}
              <button
                onClick={() => toggleAccordion(index)}
                disabled={index > 0}
              >
                {index === faqOpen ? <FiMinusCircle /> : <FiPlusCircle />}
              </button>
            </div>
            {index === faqOpen ? (
              <div className="faq-item-content">{faq.content}</div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
