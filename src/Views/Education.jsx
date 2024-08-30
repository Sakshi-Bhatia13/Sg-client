import React, { useState } from "react";
import "../css/education.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "react-elastic-carousel";
import img from "../assets/im.jpg";
import im2 from "../imgs/rings.png";
import im3 from "../imgs/necklace.png";
import im4 from "../imgs/ruby.png";
import im5 from "../imgs/pendant.png";

function Education() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState({
    title: "Search Title",
    text: "Lorem ipsum dolor ducimus consequuntur eaque inventore.",
    image: im2,
  });

  const info = {
    bt1: {
      title: "Button 1 Information",
      text: "Details about Button 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: im2,
    },
    lorem1: {
      title: "Lorem Button Information",
      text: "Details about Lorem Button. Praesentium delectus quia quibusdam illo voluptas est.",
      image: im3,
    },
    lorem2: {
      title: "Lorem Ipsum Button Information",
      text: "Details about Lorem Ipsum Button. Doloribus, ratione necessitatibus magni assumenda veritatis.",
      image: im4,
    },
    lorem3: {
      title: "Lorem Ipsum Dolor Button Information",
      text: "Details about Lorem Ipsum Dolor Button. Suscipit, nemo sit veritatis cupiditate mollitia.",
      image: im5,
    },
    lorem4: {
      title: "Lorem Ipsum Dolor Sit Button Information",
      text: "Details about Lorem Ipsum Dolor Sit Button. Voluptates pariatur vel itaque velit!",
      image: im2,
    },
  };

  const handleDropdown = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  const displayInfo = (key) => {
    const data = info[key];
    setSelectedInfo(data);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div>
      <Nav />
      <div className="Education-container">
        <h1 className="ed-heading">Blogs</h1>
        <div className="cntact-crousal">
          <div className="pd">
            <Carousel pagination={false} enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
              <div className="crousal-item">
                <img className="c-image" src={img} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
        <h1 className="ed-heading">Search by name</h1>
        <div className="sraech-area">
          <div className="search-options">
            <h2>Select here</h2>
            <div className="search-container">
              <button className="se-btn" onClick={() => displayInfo("bt1")}>bt1</button>
              <button className="se-btn" onClick={() => displayInfo("lorem1")}>lorem</button>
              <button className="se-btn" onClick={() => displayInfo("lorem2")}>lorem</button>
              <button className="se-btn" onClick={() => displayInfo("lorem3")}>Lorem, ipsum dolor.</button>
              <button className="se-btn" onClick={() => displayInfo("lorem4")}>Lorem, ipsum.</button>
            </div>
          </div>
          <div className="search-info">
            <h2 id="search-title">{selectedInfo.title}</h2>
            <p id="search-text">{selectedInfo.text}</p>
            <img id="search-image" className="c-image" src={selectedInfo.image} alt="Information Image" />
          </div>
        </div>
        <h1 className="ed-heading">Search by image</h1>
        <div className="ed-inf">
          <div className="im-search">
            <div className="ims-container">
              <Carousel pagination={false}>
                <h2>Ruby</h2>
                <h2>Emrald</h2>
                <h2>Saphire</h2>
              </Carousel>
            </div>
            <div className="im-grid">
              <div className="im-options"><img className="i-image" src={im2} alt="" /></div>
              <div className="im-options"><img className="i-image" src={im3} alt="" /></div>
              <div className="im-options"><img className="i-image" src={im4} alt="" /></div>
              <div className="im-options"><img className="i-image" src={im5} alt="" /></div>
              <div className="im-options"><img className="i-image" src={im2} alt="" /></div>
              <div className="im-options"><img className="i-image" src={im3} alt="" /></div>
              <div className="im-options"><img className="i-image" src={im4} alt="" /></div>
              <div className="im-options"></div>
              <div className="im-options"></div>
            </div>
          </div>
          <div className="search-info">
            <p className="search-text">
              <h2>Search Title </h2>
              Lorem ipsum dolor ducimus consequuntur eaque inventore. Doloribus, ratione necessitatibus magni assumenda veritatis sed voluptate in, eum molestiae nesciunt alias praesentium delectus quia quibusdam illo voluptas est, omnis error qui laudantium doloremque explicabo. Suscipit, nemo sit veritatis cupiditate mollitia unde culpa rem inventore exercitationem repudiandae omnis hic quas, ipsa, pariatur assumenda at laudantium dolore consectetur in. Inventore blanditiis eum accusamus soluta neque est illo, unde libero dolores ad quis. Voluptates pariatur vel itaque velit! Modi, unde commodi.
            </p>
            <img className="c-image" src={im2} alt="" />
          </div>
        </div>
    


{/* 
        <div className="e-section-heading">Some interesting Insights</div>

        <div className="e-line"></div>
        <div className="e-topic">
          <div className="e-topic-heading" onClick={() => handleDropdown(1)}>
            Investing in gemstones and jewellery.{" "}
            {expandedSection === 1 ? (
              <i className="fa-solid fa-plus"></i>
            ) : (
              <i className="fa-solid fa-minus"></i>
            )}
          </div>
          <div
            className={`e-topic-content ${expandedSection === 1 ? "" : "show"}`}
          >
            <h2>
              {" "}
              When investing in gemstones and jewelry, there are several key
              factors to consider to make informed decisions and maximize the
              potential returns on your investment. Here are some important
              aspects to look.
            </h2>

            <div className="e-container">
              <div className="e-information">
                <h3 className="e-sub-heading">1.Quality of Gemstones:</h3>
                <h4 className="e-content">
                  Assess the quality of the gemstones based on the 4Cs: color,
                  clarity, cut, and carat weight (for diamonds). Each gemstone
                  variety has its own specific criteria for evaluation. Look for
                  vibrant and consistent color, minimal inclusions or blemishes,
                  precise and well-proportioned cuts, and desirable carat
                  weights. Gemstone{" "}
                </h4>
              </div>

              <img className="e-image" src={img} alt="" />
            </div>

            <div className="e-container">
              <img className="e-image" src={img} alt="" />
              <div className="e-information">
                <h3 className="e-sub-heading">2. Type and Rarity:</h3>

                <h4 className="e-content">
                  Different gemstones have varying levels of rarity and demand.
                  Consider investing in gemstones that are both rare and highly
                  sought after by collectors and enthusiasts. Certain gemstone
                  varieties may experience fluctuations in popularity and value
                  over time, so research historical trends and market dynamics.
                </h4>
              </div>
            </div>

            <div className="e-container">
              <div className="e-information">
                <h3 className="e-sub-heading">3.Market Demand and Trends:</h3>

                <h4 className="e-content">
                  Stay informed about current market trends and consumer
                  preferences in the gemstone and jewelry industry. Pay
                  attention to emerging trends and shifts in demand for
                  particular gemstone types or styles. Anticipate potential
                  changes in consumer tastes and preferences, and diversify your
                  investment portfolio accordingly.
                </h4>
              </div>

              <img className="e-image" src={img} alt="" />
            </div>

            <div className="e-container">
              <img className="e-image" src={img} alt="" />
              <div className="e-information">
                <h3 className="e-sub-heading">
                  4. Authentication and Certification:
                </h3>

                <h4 className="e-content">
                  Ensure that the gemstones and jewelry you're considering for
                  investment are authentic and accurately represented. Obtain
                  certification from reputable gemological laboratories, such as
                  the Gemological Institute of America (GIA) or the
                  International Gemological Institute (IGI), to verify the
                  authenticity and quality of the gemstones.
                </h4>
              </div>
            </div>

            <div className="e-container">
              <div className="e-information">
                <h3 className="e-sub-heading">5. Provenance and History:</h3>

                <h4 className="e-content">
                  Consider the provenance and historical significance of the
                  gemstones and jewelry pieces. Gemstones with notable
                  provenance or a rich history may command higher prices and
                  attract greater interest from collectors. Research the origin
                  of the gemstones and any notable owners or historical events
                  associated with them.
                </h4>
              </div>

              <img className="e-image" src={img} alt="" />
            </div>

            <div className="e-container">
              <img className="e-image" src={img} alt="" />
              <div className="e-information">
                <h3 className="e-sub-heading">
                  6. Long-Term Investment Potential:
                </h3>

                <h4 className="e-content">
                  Evaluate the long-term investment potential of gemstones and
                  jewelry based on historical performance and future outlook.
                  Consider factors such as scarcity, durability, cultural
                  significance, and potential for appreciation over time.
                </h4>
              </div>
            </div>

            <div className="e-container">
              <div className="e-information">
                <h3 className="e-sub-heading">
                  7. Diversification and Risk Management:
                </h3>

                <h4 className="e-content">
                  Diversify your investment portfolio across different types of
                  gemstones, jewelry styles, and market segments to mitigate
                  risk and optimize returns. Consider seeking professional
                  advice from experienced gemstone dealers, investment advisors,
                  or industry experts to help guide your investment decisions.
                </h4>
              </div>

              <img className="e-image" src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="e-line"></div>
        <div className="e-topic">
          <div className="e-topic-heading" onClick={() => handleDropdown(2)}>
            Finding cost effective alternatives to precious stones.{" "}
            {expandedSection === 2 ? (
              <i className="fa-solid fa-minus"></i>
            ) : (
              <i className="fa-solid fa-plus"></i>
            )}
          </div>
          <div
            className={`e-topic-content ${expandedSection === 2 ? "show" : ""}`}
          >
            Nature provides a myriad of stunning alternatives to precious stones
            that can be used in jewelry design. These alternatives offer both
            affordability and aesthetic appeal, making them popular choices for
            those seeking cost-effective options without compromising on beauty.
            Here are some of the wondrous colors of minerals that nature offers:
            <h3 className="e-sub-heading">1. Amethyst:</h3>
            <h4 className="e-content">
              Amethyst, with its captivating purple hue, is a popular
              semi-precious stone that adds a touch of elegance to jewelry
              pieces. Its affordability and availability make it a favored
              choice for both casual and formal wear.
            </h4>
            <h3 className="e-sub-heading">2. Citrine:</h3>
            <h4 className="e-content">
              Citrine, known for its warm yellow to golden tones, resembles the
              radiance of sunlight. This gemstone is often used as a vibrant
              alternative to more expensive yellow diamonds, offering a cheerful
              and luminous appeal.
            </h4>
            <h3 className="e-sub-heading">3. Aquamarine:</h3>
            <h4 className="e-content">
              Aquamarine, with its tranquil blue-green color reminiscent of the
              sea, exudes serenity and sophistication. This semi-precious stone
              is a popular choice for adding a touch of freshness and vitality
              to jewelry designs.
            </h4>
            <h3 className="e-sub-heading">4. Pearls:</h3>
            <h4 className="e-content">
              Pearls, formed naturally within oysters and other mollusks,
              possess a timeless and classic beauty. Available in various
              shapes, sizes, and colors, pearls are versatile gems that
              complement a wide range of jewelry styles, from traditional to
              contemporary.
            </h4>
            {/*<h3 className='e-sub-heading'>5. Turquoise:</h3>

<h4 className='e-content'>Turquoise, with its distinctive blue-green hue, evokes images of desert landscapes and ancient civilizations.
 This opaque gemstone is prized for its unique coloration and natural matrix patterns,
 making each piece of turquoise jewelry a one-of-a-kind treasure.</h4>

<h3 className='e-sub-heading'>6. Coral:</h3>

<h4 className='e-content'>Coral, harvested from the depths of the ocean, showcases an array of vibrant colors ranging from deep reds
 to soft pinks and oranges. As an organic gemstone, coral adds a touch of natural beauty and exotic allure to jewelry designs.
Incorporating these colorful minerals into jewelry allows designers and enthusiasts alike to explore the diverse
 wonders of nature while embracing affordability and creativity. Whether adorning oneself with amethyst earrings or
 accessorizing with a pearl necklace, the beauty of these alternatives to precious stones is truly captivating.</h4>
             
          </div>
        </div>
*/}
     
      </div>

      <Footer />
    </div>
  );
}

export default Education;
