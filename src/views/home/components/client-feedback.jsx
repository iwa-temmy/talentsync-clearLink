import Rating from "./rating";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const ClientFeedback = () => {
  return (
    <section className="feedback">
      <div className="client-info">
        <img
          className="client-logo"
          src="/brand/shopify.svg"
          alt="shopify logo"
        />
        <div className="rating">
          <Rating />
        </div>
        <p className="client-feedback">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className="client-details">
          <div className="client-profile">
            <img src="/sarah.png" alt="Sarah Thompson" />
            <div>
              <p className="client-name">Sarah Thompson</p>
              <p className="client-position">Project Manager, Shopify</p>
            </div>
          </div>
          <div className="action-btn">
            <button>
              <HiOutlineArrowLeft />
            </button>
            <button>
              <HiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="feedback-img">
        <img src="feedback.png" alt="feedback" />
      </div>
    </section>
  );
};

export default ClientFeedback;
