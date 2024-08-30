import React, { useState } from "react";
import "../css/gemstones.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import i3 from "../imgs/3.jpg";
import oval from "../imgs/oval.png";
import round from "../imgs/round.jpeg";
import pear from "../imgs/pear.png";
import radiant from "../imgs/radiant.png";
import emerald from "../imgs/emerald.png";
import marquise from "../imgs/marquise.png";
import trillion from "../imgs/trillion.png";
import cushion from "../imgs/cushion.png";
import im2 from "../Gemstones/Isaac_20.jpg";
import im3 from "../Gemstones/Isaac_33.jpg";
import im4 from "../Gemstones/Isaac_47.jpg";
import im5 from "../Gemstones/Isaac_54.jpg";
import im6 from "../Gemstones/Isaac_65.jpg";
import im7 from "../Gemstones/Isaac_71.jpg";
import im8 from "../Gemstones/Isaac_72.jpg";
import im9 from "../Gemstones/Isaac_84.jpg";
import im10 from "../Gemstones/Isaac_88.jpg";
import im11 from "../Gemstones/Isaac_91.jpg";
import im12 from "../Gemstones/Isaac_95.jpg";
import im13 from "../Gemstones/Isaac_113.jpg";

import PriceRangeSlider from "./PriceRangeSlider";

function Gemstones() {
  const [minPrice1, setMinPrice1] = useState(0);
  const [maxPrice1, setMaxPrice1] = useState(10);
  const [minPrice2, setMinPrice2] = useState(100);
  const [maxPrice2, setMaxPrice2] = useState(10000);
  const [showFilters, setShowFilters] = useState(false);
  

  const handleOnChange = (values) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };
  const HandleProduct = (filter) => {
    window.location.href = "/product";
    event.stopPropagation();
  };

  const HandleLike = (filter) => {
    window.location.href = "/";
  };
  const [showSlider, setShowSlider] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };
  const handleRangeChange1 = (event) => {
    setMinPrice1(event.target.value);
  };
  const handleRangeChange2 = (event) => {
    setMaxPrice1(event.target.value);
  };
  const handleRangeChange3 = (event) => {
    setMinPrice2(event.target.value);
  };
  const handleRangeChange4 = (event) => {
    setMaxPrice2(event.target.value);
  };

  return (
    <div>
      <Nav />
<div className="g-filter-button-container">
        <button className="g-filter-button" onClick={toggleFilters}>
          Filter
        </button>
      </div>
      {showFilters && (
        <div className="g-filter-dropdown">
          <div className="g-filter-element">
            <div>Cut</div>
            <div className="g-dropdown-content">
              <div className="g-drop-element">
                <img className="f-img" src={oval} alt="Oval"></img>Oval
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={round} alt="Round"></img>Round
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={pear} alt="Pear"></img>Pear
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={radiant} alt="Radiant"></img>Radiant
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={cushion} alt="Cushion"></img>Cushion
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={marquise} alt="Marquise"></img>Marquise
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={emerald} alt="Emerald"></img>Emerald
              </div>
              <div className="g-drop-element">
                <img className="f-img" src={trillion} alt="Trillion"></img>Trillion
              </div>
            </div>
          </div>

          <div className="g-filter-element">
            <div>Colour</div>
            <div className="g-dropdown-content">
              <div className="g-drop-element">
                <button className="red-f-button"></button>Red
              </div>
              <div className="g-drop-element">
                <button className="green-f-button"></button>Green
              </div>
              <div className="g-drop-element">
                <button className="blue-f-button"></button>Blue
              </div>
              <div className="g-drop-element">
                <button className="yellow-f-button"></button>Yellow
              </div>
              <div className="g-drop-element">
                <button className="white-f-button"></button>White
              </div>
            </div>
          </div>

          <div className="g-filter-element">
            <div>Clarity</div>
            <div className="g-dropdown-content">
              <div className="g-drop-element">FL/IF</div>
              <div className="g-drop-element">VVS1/VVS2</div>
              <div className="g-drop-element">SI1/SI2/SI3</div>
              <div className="g-drop-element">I1/I2/I3</div>
            </div>
          </div>

          <div className="g-filter-element">
            <div>Carat</div>
            <div className="g-dropdown-content">
              <div className="card-conteiner">
                <div className="card-content">
                  <div className="card-title">Carat</div>
                  <div className="values">
                    <span>{minPrice1}</span> -<span>{maxPrice1}</span>
                  </div>
                  <div className="rangeslider">
                    <input
                      className="min input-ranges"
                      onChange={(e) => setMinPrice1(e.target.value)}
                      value={minPrice1}
                      type="range"
                      step="0.1"
                      min="1"
                      max="10"
                    ></input>
                    <input
                      className="max input-ranges"
                      onChange={(e) => setMaxPrice1(e.target.value)}
                      value={maxPrice1}
                      type="range"
                      step="0.1"
                      min="1"
                      max="10"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="g-filter-element">
            <div>Price</div>
            <div className="g-dropdown-content">
              <div className="card-conteiner">
                <div className="card-content">
                  <div className="card-title">Price</div>
                  <div className="values">
                    <span>${minPrice2}</span> -<span>${maxPrice2}</span>
                  </div>
                  <div className="rangeslider">
                    <input
                      className="min input-ranges"
                      onChange={(e) => setMinPrice2(e.target.value)}
                      value={minPrice2}
                      type="range"
                      min="100"
                      max="10000"
                    ></input>
                    <input
                      className="max input-ranges"
                      onChange={(e) => setMaxPrice2(e.target.value)}
                      value={maxPrice2}
                      type="range"
                      min="100"
                      max="10000"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop filters */}
      <div className="g-filter-container">
        <div className="g-filter-element">
          <div>Cut</div>
          <div className="g-dropdown-content">
            <div className="g-drop-element">
              <img className="f-img" src={oval} alt="Oval"></img>Oval
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={round} alt="Round"></img>Round
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={pear} alt="Pear"></img>Pear
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={radiant} alt="Radiant"></img>Radiant
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={cushion} alt="Cushion"></img>Cushion
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={marquise} alt="Marquise"></img>Marquise
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={emerald} alt="Emerald"></img>Emerald
            </div>
            <div className="g-drop-element">
              <img className="f-img" src={trillion} alt="Trillion"></img>Trillion
            </div>
          </div>
        </div>

        <div className="g-filter-element">
          <div>Colour</div>
          <div className="g-dropdown-content">
            <div className="g-drop-element">
              <button className="red-f-button"></button>Red
            </div>
            <div className="g-drop-element">
              <button className="green-f-button"></button>Green
            </div>
            <div className="g-drop-element">
              <button className="blue-f-button"></button>Blue
            </div>
            <div className="g-drop-element">
              <button className="yellow-f-button"></button>Yellow
            </div>
            <div className="g-drop-element">
              <button className="white-f-button"></button>White
            </div>
          </div>
        </div>

        <div className="g-filter-element">
          <div>Clarity</div>
          <div className="g-dropdown-content">
            <div className="g-drop-element">FL/IF</div>
            <div className="g-drop-element">VVS1/VVS2</div>
            <div className="g-drop-element">SI1/SI2/SI3</div>
            <div className="g-drop-element">I1/I2/I3</div>
          </div>
        </div>

        <div className="g-filter-element">
          <div>Carat</div>
          <div className="g-dropdown-content">
            <div className="card-conteiner">
              <div className="card-content">
                <div className="card-title">Carat</div>
                <div className="values">
                  <span>{minPrice1}</span> -<span>{maxPrice1}</span>
                </div>
                <div className="rangeslider">
                  <input
                    className="min input-ranges"
                    onChange={(e) => setMinPrice1(e.target.value)}
                    value={minPrice1}
                    type="range"
                    step="0.1"
                    min="1"
                    max="10"
                  ></input>
                  <input
                    className="max input-ranges"
                    onChange={(e) => setMaxPrice1(e.target.value)}
                    value={maxPrice1}
                    type="range"
                    step="0.1"
                    min="1"
                    max="10"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="g-filter-element">
          <div>Price</div>
          <div className="g-dropdown-content">
            <div className="card-conteiner">
              <div className="card-content">
                <div className="card-title">Price</div>
                <div className="values">
                  <span>${minPrice2}</span> -<span>${maxPrice2}</span>
                </div>
                <div className="rangeslider">
                  <input
                    className="min input-ranges"
                    onChange={(e) => setMinPrice2(e.target.value)}
                    value={minPrice2}
                    type="range"
                    min="100"
                    max="10000"
                  ></input>
                  <input
                    className="max input-ranges"
                    onChange={(e) => setMaxPrice2(e.target.value)}
                    value={maxPrice2}
                    type="range"
                    min="100"
                    max="10000"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="g-Products">
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im2}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im3}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im4}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>

        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im6}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im5}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im7}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im8}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im9}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im10}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im11}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im12}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im5}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im2}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im6}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im4}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im3}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im7}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im8}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im9}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
        <div className="g-product-card">
          <img
            className="g-product-image"
            onClick={HandleProduct}
            src={im10}
            alt=""
          ></img>

          <div className="heart-container" title="Like">
            <input
              type="checkbox"
              className="checkbox"
              id="Give-It-An-Id"
            ></input>
            <div className="svg-container">
              <svg
                viewBox="0 0 24 24"
                className="svg-outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="svg-filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="svg-celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20"></polygon>
                <polygon points="10,50 20,50"></polygon>
                <polygon points="20,80 30,70"></polygon>
                <polygon points="90,10 80,20"></polygon>
                <polygon points="90,50 80,50"></polygon>
                <polygon points="80,80 70,70"></polygon>
              </svg>
            </div>
          </div>
          <div className="g-product-details" onClick={HandleProduct}>
            <div className="g-product-weight">Weight: 2ct</div>
            <div className="g-product-price">Price: 200 SGD</div>
          </div>
        </div>
      </div>

      <button className="Loadmore-button">Load more</button>

      <Footer />
    </div>
  );
}

export default Gemstones;