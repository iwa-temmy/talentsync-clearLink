import { features } from "../../../data";

const WhyChoose = () => {
  return (
    <section className="section why-choose">
      <h5 className="why-choose-intro">The ClearLink Advantage</h5>
      <h2 className="why-choose-header">Why choose ClearLink?</h2>
      <p className="why-choose-description">
        In a world where connection is everything, ClearLink takes the lead. Our{" "}
        <br />
        cutting-edge video conferencing app offers:
      </p>
      <div className="features">
        <div className="features-group">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <div className="icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="features-img">
          <div className="arrow-img">
            <img src="/arrow.svg" alt="arrow" />
          </div>
          <img src="/feature.png" alt="feature-img" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
