import Rating from "./rating";
const Hero = () => {
  return (
    <div className="section hero">
      <div className="hero-text">
        <h1 id="header">
          Uniting the world, <br /> one video call at a time
        </h1>
        <p id="sub-header">
          Experience the future of communication with ClearLink – <br /> where
          crystal-clear video conferencing meets <br /> unparalleled simplicity.
        </p>
        <div className="hero-buttons">
          <button id="free-trial">Start your free trial</button>
          <button id="discover-ai">
            <img src="/bot.svg" alt="bot" /> Discover AI assistant
          </button>
        </div>
        <div className="reviews-and-ratings">
          <img src="/avatar-group.png" alt="avatar-group" />
          <div>
            <Rating />
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/hero.png" alt="hero section image" />
      </div>
    </div>
  );
};

export default Hero;
