import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Gemstones from './Views/Gemstones';
import Home from './Views/Home';
import Jewellery from './Views/Jewellery';
import Services from './Views/Services';
// import Education from './Views/Education';
import Contact from './Views/Contact';
import Login from './Views/Login';
import SignUp from './Views/SignUp';
import Forgotpass from './Views/Forgotpass';
import Cart from './Views/Cart';
import Checkout from './Views/Checkout';
import WishList from './Views/WishList';
import ProductPage from './Views/ProductPage';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/education" element={<Education />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/forgotpassword" element={<Forgotpass/>}/>
        <Route path="/product" element={<ProductPage/>}/>

      </Routes>
    </div>
  )
}

export default App
