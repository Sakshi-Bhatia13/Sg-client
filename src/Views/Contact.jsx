import React, { useState } from "react";
import "../css/contact.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import contact2 from "../imgs/contact2.jpg";
import LeaveUsMess from "../components/LeaveUsMess";
import CustomOrder from "../components/CustomOrder";
import BookAppF from "../components/BookAppF";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import img from "../imgs/Book an Appointment.jpeg";
import img2 from "../imgs/Custom order & sourcing request.jpeg";
import img3 from "../imgs/Leave a Message.jpeg";
import BookApp from "../components/BookAppF";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("sparkle");

  const [expandedSection, setExpandedSection] = useState(null);

  const handleDropdown = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("sparkle");
    } else {
      setSelectedCategory(category);
    }
  };
  const [showpopup1, setShowPopup1] = useState(false);

  const openpopup1 = () => {
    setShowPopup1(true);
  };
  const [showpopup2, setShowPopup2] = useState(false);

  const openpopup2 = () => {
    setShowPopup2(true);
  };
  const [showpopup3, setShowPopup3] = useState(false);

  const openpopup3 = () => {
    setShowPopup3(true);
  };

  return (
    <div className="Contact-Wrapper">
      <Nav />

      <div className="contact-sub-heading">
        <div>Book an Appointment</div>
        <div className="line5"></div>
        <div>Custom Order & Sourcing Request</div>
        <div className="line5"></div>
        <a href="https://tally.so/r/3EXoxN">
          <div> Leave a Message</div>
        </a>
      </div>

      <div className="contact-Design">
        <div className="contact-Design-container">
          <h1 className="contact-service-title">Book an Appointment</h1>

          <p>
            Looking to meet up and discuss your requirements in greater detail
            or see how some of our stones look in person? Make an appointment
            here!
          </p>
          <button className="button" onClick={openpopup3}>
            Book Now
          </button>
          {showpopup3 && <BookAppF onClose={() => setShowPopup3(false)} />}
        </div>
        <div className="img-container">
          {" "}
          <img className="contact-Design-img" src={img} alt="" />
          {showpopup3 && <BookAppF onClose={() => setShowPopup3(false)} />}
        </div>
      </div>

      <div className="contact-Design2">
        <div className="img-container">
          {" "}
          <img className="contact-Design-img" src={img2} alt="" />
        </div>
        <div className="contact-Design-container">
          <h1 className="contact-service-title">
            Custom Order & Sourcing Request
          </h1>

          <p>
            Need our help sourcing a Gemstone and/or creating Custom Jewellery?
            Send us a query here!
          </p>
          <button className="button" onClick={openpopup2}>
            Get Started Today
          </button>
          {showpopup2 && <CustomOrder onClose={() => setShowPopup2(false)} />}
        </div>
      </div>

      <div className="contact-Design">
        <div className="contact-Design-container">
          <h1 className="contact-service-title">Leave a Message</h1>

          <p>
            Looking to make a quick inquiry? Fill up this form and we will get
            back to you as soon as we can!
          </p>
          <button className="button" onClick={openpopup1}>
            Message now
          </button>
          {showpopup1 && <LeaveUsMess onClose={() => setShowPopup1(false)} />}
        </div>
        <div className="img-container">
          {" "}
          <img className="contact-Design-img" src={img3} alt="" />
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-heading">
          <h2>Common Questions</h2>
        </div>
        <div className="faq-main">
          <div className="faq-categories">
            <div className="faq-cat-flex">
              <div
                className={
                  selectedCategory === "sparkle"
                    ? "faq-category faq-active"
                    : "faq-category"
                }
                onClick={() => handleCategoryClick("sparkle")}
              >
                Discover Your Sparkle{" "}
              </div>
              <div
                className={
                  selectedCategory === "dream"
                    ? "faq-category faq-active"
                    : "faq-category"
                }
                onClick={() => handleCategoryClick("dream")}
              >
                Crafting a Dream
              </div>
              <div
                className={
                  selectedCategory === "care"
                    ? "faq-category faq-active"
                    : "faq-category"
                }
                onClick={() => handleCategoryClick("care")}
              >
                Wearing and Caring
              </div>
            </div>
            <div className="faq-qa-flex">
              {selectedCategory === "sparkle" && (
                <div className="faq-qa">
                  <div className="question-answer" id="sparkle-qa">
                    <div className="question" onClick={() => handleDropdown(1)}>
                      Q: How do I choose the right gemstone for me?{" "}
                      {expandedSection === 1 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 1 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Consider your personal style, the significance of
                      different gemstones, and your budget. Some prefer
                      traditional diamondsb while others opt for unique stones
                      like sapphires or emeralds.
                    </div>

                    <div className="line-4"></div>

                    <div className="question" onClick={() => handleDropdown(2)}>
                      Q: What are the key factors to look for in quality
                      jewelry?{" "}
                      {expandedSection === 2 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 2 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Look for craftsmanship, material quality, gemstone
                      authenticity, and design elements. Ensure the piece has a
                      good finish and the gemstones are securely set.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(3)}>
                      Q: Can you explain the difference between natural,
                      synthetic, and imitation gemstones?{" "}
                      {expandedSection === 3 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 3 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Natural gemstones are formed in nature, synthetic ones
                      are man-made but have the same physical properties as
                      natural ones, while imitation stones are made to look like
                      real gemstones but don't have the same properties.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(4)}>
                      Q: How can I determine my ring size accurately?{" "}
                      {expandedSection === 4 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 4 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Use a ring sizer or measure the circumference of your
                      finger with a string or paper strip and compare it to a
                      ring size chart.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(5)}>
                      Q: What's the significance of different gemstone cuts?{" "}
                      {expandedSection === 5 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 5 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Gemstone cuts, like round, princess, or oval, affect
                      the stone's brilliance and style. Each cut has its unique
                      charm and reflects light differently.
                    </div>
                    <div className="line-4"></div>
                  </div>
                </div>
              )}

              {selectedCategory === "dream" && (
                <div className="faq-qa">
                  <div className="question-answer" id="dream-qa">
                    <div className="question" onClick={() => handleDropdown(1)}>
                      Q: I would like to create a custom piece, how does the
                      process work?{" "}
                      {expandedSection === 1 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 1 ? "answerShow" : "answer"
                      }`}
                    >
                      A: An overview of the steps can be seen from our
                      customisation page{" "}
                      <a href="link-to-customization-page">here</a>.
                    </div>

                    <div className="line-4"></div>

                    <div className="question" onClick={() => handleDropdown(2)}>
                      Q: What is the expected timeline for a custom jewellery
                      order?{" "}
                      {expandedSection === 2 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 2 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Custom orders typically take 4-8 weeks, depending on
                      the complexity of the design and the materials used.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(3)}>
                      Q: Can I update or change my order once it's been placed?{" "}
                      {expandedSection === 3 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 3 ? "answerShow" : "answer"
                      }`}
                    >
                      A:Minor changes can usually be accommodated in the early
                      stages, but major changes may affect the timeline and
                      cost.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(4)}>
                      Q: What payment methods do you accept?{" "}
                      {expandedSection === 4 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 4 ? "answerShow" : "answer"
                      }`}
                    >
                      A: We accept various methods, including credit/debit
                      cards, bank transfers, and sometimes instalments.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(5)}>
                      Q: Do you provide certificates of authenticity for
                      gemstones?{" "}
                      {expandedSection === 5 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 5 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Yes, our gemstones and diamonds come with a certificate
                      from our gemologists. You may also request for
                      certificates at a gemological institute for an additional
                      fee.
                    </div>

                    <div className="line-4"></div>

                    <div className="question" onClick={() => handleDropdown(6)}>
                      Q: Do you provide certificates of authenticity for
                      jewellery?{" "}
                      {expandedSection === 6 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 6 ? "answerShow" : "answer"
                      }`}
                    >
                      A: We do not provide certificates for jewellery with set
                      gemstones unless it incorporates a gem which we have
                      provided. In this case we will provide a certificate for
                      the stone used. You may also request certification at a
                      gemological institute for an additional fee.
                    </div>
                    <div className="line-4"></div>
                  </div>
                </div>
              )}

              {selectedCategory === "care" && (
                <div className="faq-qa">
                  <div className="question-answer" id="care-qa">
                    <div className="question" onClick={() => handleDropdown(1)}>
                      Q: How should I clean and care for my jewellery?{" "}
                      {expandedSection === 1 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>

                    <div
                      className={`${
                        expandedSection === 1 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Use a soft cloth and mild soap solution. Avoid harsh
                      chemicals and remove jewellery during strenuous
                      activities.
                    </div>

                    <div className="line-4"></div>

                    <div className="question" onClick={() => handleDropdown(2)}>
                      Q: Can I wear my jewellery in water?{" "}
                      {expandedSection === 2 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 2 ? "answerShow" : "answer"
                      }`}
                    >
                      A: It's best to remove jewellery before swimming or
                      bathing to prevent damage or tarnishing.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(3)}>
                      Q: What should I do if my purchased jewellery needs
                      repair?{" "}
                      {expandedSection === 3 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 3 ? "answerShow" : "answer"
                      }`}
                    >
                      A: While we do not presently offer repair services, we
                      highly recommend visiting one that does to ensure the
                      integrity of the piece.
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(4)}>
                      Q: How often should I have my jewellery inspected?{" "}
                      {expandedSection === 4 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 4 ? "answerShow" : "answer"
                      }`}
                    >
                      A: We recommend an annual inspection to check for loose
                      stones, worn mountings, and general wear. [Button linking
                      to 6.1.2]
                    </div>
                    <div className="line-4"></div>
                    <div className="question" onClick={() => handleDropdown(5)}>
                      Q: How can I store my gemstones or jewellery to prevent
                      damage?{" "}
                      {expandedSection === 5 ? (
                        <i className="fa-solid fa-minus"></i>
                      ) : (
                        <i className="fa-solid fa-plus"></i>
                      )}
                    </div>
                    <div
                      className={`${
                        expandedSection === 5 ? "answerShow" : "answer"
                      }`}
                    >
                      A: Store each piece separately in a soft-lined jewellery
                      box or pouch to prevent contact scratching and/or
                      tangling.
                    </div>
                    <div className="line-4"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
