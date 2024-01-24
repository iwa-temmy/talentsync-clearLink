import Footer from "../../components/layout/footer";
import FooterExtension from "../../components/layout/footer/footer-entension";
import Header from "../../components/layout/header";
import ClientFeedback from "./components/client-feedback";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Hero from "./components/hero";
import Join from "./components/join";
import WhyChoose from "./components/why-choose";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Join />
      <WhyChoose />
      <ClientFeedback />
      <Faq />
      <Contact />
      <Footer />
      <FooterExtension />
    </div>
  );
};

export default Home;
