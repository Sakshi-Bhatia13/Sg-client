import React from "react";
import "../css/services.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import img from "../assets/im.jpg";

function Services() {
  const HandleEducation = () => {
    window.location.href = "/education";
  };
  const HandleContact = () => {
    window.location.href = "/contact";
  };

  return (
    <div>
      <Nav />
      <div className="custom-services">
        <h1 className="custom-heading">
          {" "}
          The Custom <br /> Jewellery Process
        </h1>
        <div className="custom-container">
   
            <div>
              <h2>Make it unique.</h2>
              <p>
                Ever felt that perfection is both beautiful yet boring? We get
                it. That is why we embrace both the beauty and flaws of coloured
                stones to create a piece that reflects nature at it's finest. At
                the end of the day, we are only human after all.
              </p>
            </div>
            <div>
              <h2>Make it yours.</h2>

              <p>
                Sketch a design from your dreams or engrave a personal message
                on your piece. The right piece of jewellery does more than
                adorn; it tells a story, celebrates a moment, and becomes an
                integral part of your personal legacy.
              </p>
            </div>
        </div>
      </div>

        <div className="Design">
            <img className="Design-img" src={img} alt="" />
       
          <div className="Design-container">
            <h1 className="service-title">Design Consultation</h1>
            <h3>Tell us about yourself.</h3>
            <p>
              Struggling to find your dream gemstone? You're not alone. At
              Maedric, we can help you find your ideal stone. With our global
              sourcing techniques, we can bring you the best and most exotic the
              world has to offer.
            </p>
          </div>
        </div>

        <div className="customisation">
          <h1>Choosing your Stones</h1>
          <div className="process">
            <div>
              <h3>Browse our Collection</h3>
              <p>
                Want some quick options to choose from? Check out our well
                documented and curated collection to get started!{" "}
              </p>
            </div>
            <div>
              <h3>Bring your Own</h3>
              <p>
                Have a collection you would like us to use? Let us know and we
                will help integrate these pieces into your design.{" "}
              </p>
            </div>
            <div>
              <h3>Start an Adventure</h3>
              <p>
                Can't find the gem you want anywhere? Let us do the legwork.
                With our connections and extensive purchasing network, we will
                find what you need.
              </p>
            </div>
          </div>
          </div>



          <div className="curating">
            <div>
              <h1>Creating your Piece</h1>
              <h3>Where Science and Art combine.</h3>
              <p>
                We embrace both the expertise of trained goldsmiths and the
                latest technologies. Using both Computer Aided Design (CAD) and
                3D Rendering, we collaborate with skilled manufacturers to
                transform your idea into a one-of-a-kind masterpiece.{" "}
              </p>
            </div>
            <img className="curating-img" src={img} alt="" />
          </div>
        
      
      <Footer />
    </div>
  );
}

export default Services;
