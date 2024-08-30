import React,{useState} from 'react'
import "../css/jewellery.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import i3 from "../imgs/3.jpg";
import im7 from"../jewellery/Isaac_2.jpg"
import im3 from"../jewellery/Isaac_3.jpg"
import im4 from"../jewellery/Isaac_4.jpg"
import im5 from"../jewellery/Isaac_5.jpg"
import im6 from"../jewellery/Isaac_7.jpg"
import im2 from"../jewellery/Isaac_8.jpg"
import im8 from"../jewellery/Isaac_9.jpg"
import im9 from"../jewellery/Isaac_10.jpg"
import im10 from"../jewellery/Isaac_11.jpg"
import im11 from"../jewellery/Isaac_12.jpg"
import im12 from"../jewellery/Isaac_13.jpg"
import im13 from"../jewellery/Isaac_14.jpg"



function Jewellery() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

  
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
 
  }
  
   
  
    const [showSlider, setShowSlider] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };
  return (
    <div>
       <Nav/>

       {/*
      <div className='jewellery-navbar-container'>
        <div className='jewellery-navbar-element'>Featured</div>
        <div className='jewellery-navbar-element'>Rings</div>
        <div className='jewellery-navbar-element active-2'>Pendant/Neckpeices</div>
        <div className='jewellery-navbar-element'>Bangles/Bracelets</div>
        <div className='jewellery-navbar-element'>Earrings</div>
        <div className='jewellery-navbar-element'>Brooches</div>

      </div>
      <div className='jewellery-filter-container'>
      <div className='jewellery-filter-element' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>Cut
 
    <div className='jewellery-dropdown-content' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>

    <div className='jewellery-drop-element'>Oval</div>
      <div className='jewellery-drop-element'>Round</div>
      <div className='jewellery-drop-element' >Pear</div>
      <div className='jewellery-drop-element'>Emerald Cut</div>
      <div className='jewellery-drop-element' >Octagon</div>
      <div className='jewellery-drop-element' >Marquise</div>
      <div className='jewellery-drop-element' >Trilliant</div>
    
    </div>
  
</div>
      <div className='jewellery-filter-element' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>Colour
      <div className='jewellery-dropdown-content' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
      
      <div className='jewellery-drop-element'>Red</div>
      <div className='jewellery-drop-element'>Green</div>
      <div className='jewellery-drop-element'>Blue</div>
      <div className='jewellery-drop-element' >Yellow</div>
      <div className='jewellery-drop-element' >White</div>
    
    </div>
        
        </div>
        <div className='jewellery-filter-element' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>Clarity
        <div className='jewellery-dropdown-content' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
      
      <div className='jewellery-drop-element'>FL/IF</div>
      <div className='jewellery-drop-element'>VVS1/VVS2</div>
      <div className='jewellery-drop-element'>SI1/SI2/SI3</div>
      <div className='jewellery-drop-element' >I1/I2/I3</div>
      
    
    </div>

        </div>
        <div className='jewellery-filter-element' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>Carat
        <div className='jewellery-dropdown-content' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
      
      <div className='jewellery-drop-element'>0.2</div>
      <div className='jewellery-drop-element'>0.5</div>
      <div className='jewellery-drop-element'>1.0</div>
      <div className='jewellery-drop-element' >2.0</div>
      <div className='jewellery-drop-element' >3.0</div>
      <div className='jewellery-drop-element' >4.0</div>
      <div className='jewellery-drop-element' >5.0</div>
      
    
    </div>
    </div>
    <div
        className='jewellery-filter-element'
        onMouseEnter={() => setShowSlider(true)}
        onMouseLeave={() => setShowSlider(false)}
      >
        Price
      
          <PriceSlider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onChange={handlePriceChange}
          />
        
      </div>

      </div>
  */}
       <div className='jewellery-Products '>

      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im7} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im3} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im4} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im5} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im6} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im7} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im8} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im9} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im10} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im11} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im12} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im13} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im2} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im3} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im4} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im5} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im6} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im7} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im8} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im9} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im10} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im11} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im12} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      
      <div className="jewellery-product-card">
      <img className='jewellery-product-image' src={im13} alt=''></img>
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
      <div className='jewellery-product-details'>
      <div className="jewellery-product-description">Description of the product</div>
      <div className="jewellery-product-price">Price</div>
      </div>
      </div>  
      </div>


     
      <button className='jewellery-Loadmore-button'>Load more</button>
    
      <Footer/>
     
      
    </div>
  )
}

export default Jewellery;
