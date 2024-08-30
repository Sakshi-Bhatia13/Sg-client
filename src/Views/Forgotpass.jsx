import React, { useState } from 'react';
import '../css/forgotpass.css';

function Forgotpass() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset link sent to:', email);
  };
  const HandleHome = ()=>{
    window.location.href = "/";
  }

  const goBack = ()=>{
    window.history.back();
  }


  return (
    <div className="fp">
      <button onClick={goBack} className='ls-back-btn'> Back! </button>
    
<div className="forgot-password-container">
          
      <div className="logo-sl" onClick={HandleHome}>
        <div className="main-logosl"> MAEDRIC </div>
        <div className="sub-logosl">Gemstones & Jewellery</div>
      </div>
   
      
      <form className="fp-form" onSubmit={handleSubmit}>
        <div className="fp-form-group">
          <label className="fp-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='Enter your email'
          />
        </div>
        <button className="fp-form-btn" type="submit">
          Reset Password
        </button>
      </form>
    </div>

    </div>
    
  );
}

export default Forgotpass;
