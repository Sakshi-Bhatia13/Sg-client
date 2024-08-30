import React, { useState } from "react";
import "../css/cart.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import i3 from "../imgs/rings.png";

function Cart() {
  const HandleHome = () => {
    window.location.href = "/";
  };
  const HandleCheckout = () => {
    window.location.href = "/checkout";
  };
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 2 },
    { id: 2, name: "Product 2", price: 20, quantity: 1 },
    { id: 3, name: "Product 3", price: 30, quantity: 3 },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedCart = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <Nav />
      <div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>
        <div className="cart-items">
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img className="cart-product-image" src={i3} alt=""></img>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-quantity-controls">
                    <button
                      className="cart-quantity-button"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <p className="cart-item-quantity">{item.quantity}</p>
                    <button
                      className="cart-quantity-button"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cart-remove-button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <p className="cart-item-price">Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-flex">
              <h3 className="cart-total-price">Price</h3>
              <h3 className="cart-total-price">${getTotalPrice()}</h3>
            </div>
            <div className="cart-flex">
              <h3 className="cart-total-price">Shipping</h3>
              <h3 className="cart-total-price">FREE</h3>
            </div>
            <div className="line-3"></div>
            <div className="cart-flex">
              <h3 className="cart-total-price">Total Price</h3>
              <h3 className="cart-total-price">${getTotalPrice()}</h3>
            </div>
            <div className="cart-actions">
              <button className="continue-shopping-button" onClick={HandleHome}>
                Continue Shopping
              </button>
              <button className="checkout-button" onClick={HandleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
