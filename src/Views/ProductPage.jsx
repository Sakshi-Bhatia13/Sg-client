import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../css/productpage.css";
import i3 from "../imgs/rings.png";

function ProductPage() {
  return (
    <div>
      <Nav />
      <div className="pp-product-page">
        <div className="pp-width">
        <div className="pp-product-images">
          <img src={i3} alt="Product Image" className="main-product-img-grid" />
          <div className="product-image-grid">
            <img src={i3} alt="Product Image" />
            <img src={i3} alt="Product Image " />
            <img src={i3} alt="Product Image " />
            <img src={i3} alt="Product Image " />
          </div>
        </div>
        <div className="pp-product-details">
          <div className="pp-product-name">Product Name</div>

          <div className="p-des">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla fringilla, justo in commodo lobortis.
          </div>
          <div className="product-line"></div>
          <div className="p-weight">Weight, ipsum.</div>
          <div className="p-price">Price: $XX.XX</div>
          <div className="product-line"></div>

          <button className="add-to-cart-button">Add to Cart</button>
        </div>
        </div>

      </div>
{/*
      <h2 className="recomendation-title">Specially recomenden for you!</h2>

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
 */}
      <h2 className="recomendation-title pt">Top Sellers!</h2>

      <div className="jewellery-Products ">
        <div className="jewellery-product-card">
          <img className="jewellery-product-image" src={i3} alt=""></img>
          <div className="jewellery-product-details">
            <div className="jewellery-product-weight">Weight</div>
            <div className="jewellery-product-price">Price</div>
          </div>
        </div>
        <div className="jewellery-product-card">
          <img className="jewellery-product-image" src={i3} alt=""></img>
          <div className="jewellery-product-details">
            <div className="jewellery-product-weight">Weight</div>
            <div className="jewellery-product-price">Price</div>
          </div>
        </div>
        <div className="jewellery-product-card">
          <img className="jewellery-product-image" src={i3} alt=""></img>
          <div className="jewellery-product-details">
            <div className="jewellery-product-weight">Weight</div>
            <div className="jewellery-product-price">Price</div>
          </div>
        </div>
        <div className="jewellery-product-card">
          <img className="jewellery-product-image" src={i3} alt=""></img>
          <div className="jewellery-product-details">
            <div className="jewellery-product-weight">Weight</div>
            <div className="jewellery-product-price">Price</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
