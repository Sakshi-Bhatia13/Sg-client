import React, { useState } from 'react';
import Slider from 'react-slider';
import "../css/priceslider.css";


const PriceSlider = () => {
  
  const [priceRange, setPriceRange] = useState([0, 10000]); 

  
  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  return (
    <div className="price-range-slider">
     
      <div className="slider-container">
        <Slider
          min={0}
          max={10000}
          step={100}
          value={priceRange}
          onChange={handlePriceChange}
          withBars
          className='slider'
        />
      </div>
      <div className="price-range-values">
        <span>Min: ${priceRange[0]}</span>
        <span>Max: ${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
