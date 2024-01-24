import { features } from "../../../data";

const WhyChoose = () => {
  return (
    <section className="section">
      <h5>The ClearLink Advantage</h5>
      <h2>Why choose ClearLink?</h2>
      <p>
        In a world where connection is everything, ClearLink takes the lead. Our
        cutting-edge video conferencing app offers:
      </p>
      <div>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature" key={index}>
              <img src={feature.icon} alt={feature.title} />
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div>
          <img src="/feature.png" alt="feature-img" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
