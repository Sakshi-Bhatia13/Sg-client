import React, { useState } from "react";
import "../css/wishlist.css";
import i3 from "../imgs/rings.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 10,
      description: "Description of Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      description: "Description of Product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      description: "Description of Product 3",
    },
  ]);

  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div>
      <Nav />
      <div className="wishlist-container">
        <h2 className="wishlist-title">Wishlist</h2>
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img className="w-product-image" src={i3} alt=""></img>
              <div className="w-info">
                <h3 className="w-item-name">{item.name}</h3>
                <p className="w-item-price">Price: ${item.price}</p>
                <p className="w-item-description">{item.description}</p>
              </div>
              <div className="wishlist-buttons">
                <button
                  className="w-remove-button"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                >
                  Remove
                </button>
                <button className="w-remove-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <button className="w-remove-button-all-cart">Add all to Cart</button>
        {/*  
      <h2 className="recomendation-title">Specially recomenden for you!</h2>

      <div className='jewellery-Products '>

<div className="jewellery-product-card">
<img className='jewellery-product-image' src={i3} alt=''></img>
<div className='jewellery-product-details'>
<div className="jewellery-product-weight">Weight</div>
<div className="jewellery-product-price">Price</div>
</div>
</div>  
<div className="jewellery-product-card">
<img className='jewellery-product-image' src={i3} alt=''></img>
<div className='jewellery-product-details'>
<div className="jewellery-product-weight">Weight</div>
<div className="jewellery-product-price">Price</div>
</div>
</div> 
<div className="jewellery-product-card">
<img className='jewellery-product-image' src={i3} alt=''></img>
<div className='jewellery-product-details'>
<div className="jewellery-product-weight">Weight</div>
<div className="jewellery-product-price">Price</div>
</div>
</div> 
 

</div>
*/}
        <h2 className="recomendation-title">Top Sellers!</h2>

        <div className="jewellery-Products ">
          <div className="jewellery-product-card">
            <img className="jewellery-product-image" src={i3} alt=""></img>
            <div className="jewellery-product-details">
              <div className="jewellery-product-description">
                Description of the product
              </div>

              <div className="jewellery-product-price">Price</div>
            </div>
          </div>
          <div className="jewellery-product-card">
            <img className="jewellery-product-image" src={i3} alt=""></img>
            <div className="jewellery-product-details">
              <div className="jewellery-product-description">
                Description of the product
              </div>

              <div className="jewellery-product-price">Price</div>
            </div>
          </div>
          <div className="jewellery-product-card">
            <img className="jewellery-product-image" src={i3} alt=""></img>
            <div className="jewellery-product-details">
              <div className="jewellery-product-description">
                Description of the product
              </div>

              <div className="jewellery-product-price">Price</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
