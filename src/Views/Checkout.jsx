import React, { useState } from 'react';
import '../css/checkout.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


function Checkout  ({ prevtItems, totalPrice }) {
 
const [prevItems, setPrevItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
    { id: 3, name: 'Product 3', price: 30, quantity: 3 },
  ]);


  return (
    <div>
        <Nav/>
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="ch-order-preview">
        <h3>Order Preview</h3>
        <div className="ch-order-items">
          {prevItems.map(item => (
            <div key={item.id} className="ch-order-item">
              <p className="ch-item-name">{item.name}</p>
              <p className="ch-item-quantity">Quantity: {item.quantity}</p>
              <p className="ch-item-price">Price: ${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <p className="ch-total-price">Total Price: ${totalPrice}</p>
      </div>
      <div className="ch-address-forms">
       
          <div  className="ch-address-form">
            <input
              type="text"
              placeholder="First Name"
          
         
            />
            <input
              type="text"
              placeholder="Last Name"

 
            />
            <input
              type="text"
              placeholder="Address Line 1"
  
        
            />
            <input
              type="text"
              placeholder="Address Line 2"
          
            />
            <input
              type="text"
              placeholder="City"
    

            />
            <input
              type="text"
              placeholder="State"
       
  
            />
            <input
              type="text"
              placeholder="Country"

      
            />
            <input
              type="text"
              placeholder="Postal Code"
            
              
            />
          </div>
   
        <button className="ch-add-address-button" >Add Address</button>
      </div>
      <button className="ch-checkout-button">Proceed to Payment</button>
    </div>
    <Footer/>
    </div>
  );
};

export default Checkout;
