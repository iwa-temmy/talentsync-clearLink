import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Hero from "./components/hero";
import Join from "./components/join";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
