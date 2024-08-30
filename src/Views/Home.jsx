import React from "react";
import "../css/home.css";
import Carousel from "../components/Carousel";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import home1 from "../imgs/home1.jpeg";
import home2 from "../imgs/home2.jpeg";
import home3 from "../imgs/home3.jpeg";
import home4 from "../imgs/home4.jpeg";

function Home() {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="wid">
      <Nav />
      <div className="hero-video">
        <h2>Space for video</h2>
      </div>

      <div className="home-information-section">
        <div className="home-img">
          <img src={home4} alt="" />
        </div>
        <div className="home-information">
          <h2>Nature's Gifts for Cultured Taste</h2>
          <p>
            MAEDRIC specialises in sourcing precious coloured gemstones. Each
            and every piece is a unique product of nature. They are to some,
            regarded as investments one can wear, and others, an expression of
            beauty and class.
          </p>
          <div className="button-spacing">
            <button onClick={() => handleNavigation("/gemstones")} className="button">Shop Gemstones</button>
            <button onClick={() => handleNavigation("/jewellery")} className="button">Shop Jewellery</button>
          </div>
        </div>
      </div>

      <div className="home-information-section g">
        <div className="home-information">
          <h2>Bespoke Jewellery Services</h2>
          <p>
            At MAEDRIC, we do more than sell a product. We aim to be artisans of dreams and curators of timeless elegance. Whether for your wedding or to celebrate the fruits
            of your journey, let us help you create a masterpiece.
          </p>
          <button onClick={() => handleNavigation("/contact")} className="button">Custom Order</button>
        </div>
        <div className="home-img">
          <img src={home3} alt="" />
        </div>
      </div>

      <div className="home-information-section">
        <div className="home-img">
          <img src={home2} alt="" />
        </div>
        <div className="home-information">
          <h2>Gemology</h2>
          <p>
            We want you to build a lasting legacy of gemstone appreciation. Learn your options and let us help curate a unique, personal collection you can call your own.
            <br />
            Check out our education page to learn more about the stones you love.
          </p>
          <button onClick={() => handleNavigation("/education")} className="button">Education</button>
        </div>
      </div>

      <div className="home-information-section g">
        <div className="home-information">
          <h2>Quality Service</h2>
          <p>
            Looking for an additional piece to make your past purchase into a set? Need a resize for a better fit? Knocked a stone out of your setting? We are here to help.
            <br />
            Check out our services section to learn more about what we offer.
          </p>
          <button onClick={() => handleNavigation("/services")} className="button">Services</button>
        </div>
        <div className="home-img">
          <img src={home1} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
