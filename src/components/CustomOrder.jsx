import { useState, useEffect } from "react";
import '../css/forms.css';

import img3 from "../imgs/mdimg2.png";
function CustomOrder ({onClose}) {
const [title, setTitle] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [country, setCountry] = useState('');
const [subject, setSubject] = useState('');
const [colour,setColour]= useState('');
const [carat,setCarat]= useState('');
const [budget, setBudget] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e)=>{
    e.preventdDefault();
    console.log({title,firstName,lastName,email,country,subject,colour,carat,budget,phone,message})
    setTitle('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setSubject('');
    setColour('');
    setCarat('');
    setBudget('');
    setPhone('');
    setMessage('');
};

    return(<div>
         <div className="popup">
    <div className="popup-inner">
      <button className="close-btn" onClick={onClose}>X</button>
      <h1>Custom Order & Sourcing Request</h1>
  <form className='leavemess-form2' onSubmit={handleSubmit}>
{/*    <div className="input-container">
     <label className="lm-input" htmlFor="title">Title:</label>
      <select
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
        <option value="Mrs">Mrs</option>
      </select>
    </div> */}
    <div className="input-container">
      <label className="lm-input" htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
    </div>
    <div className="input-container">
      <label className="lm-input" htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
    </div>
    <div className="input-container">
      <label className="lm-input" htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="input-container">
      <label className="lm-input"  htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
    </div>
    <div className="input-container ipc-swid">
      <label className="lm-input" htmlFor="country">Country:</label>
      <select
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="Singapore">Singapore</option>
      </select>
    </div>

    <div className="input-container ipc-swid">
      <label className="lm-input" htmlFor="budget">Budget Range (SGD):</label>
      <select
        id="budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="1000">Below $1000</option>
        <option value="5000">$1000 - $5000</option>
        <option value="10000">$5000 - $10,000</option>
        
      </select>
    </div>
    <div className="input-container ipc-swid">
        <label className="lm-input" htmlfor="colour">Prefered Colour:</label>
        <select 
        id="colour"
        value={colour}
        onChange={(e)=>setColour(e.target.value)}
        required>
            <option value="">Select</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="White">White</option>
        </select>

    </div>
    <div className="input-container ipc-swid">
        <label className="lm-input" htmlFor="carat">Prefered Carat Range</label>
        <select
        id="carat"
        value={carat}
        onChange={(e)=>setCarat(e.target.value)}
        required>
            <option value="">Select</option>
            <option value="0.00-2.00">0.00-2.00</option>
            <option value="2.00-4.00">2.00-4.00</option>
            <option value="4.00-6.00">4.00-6.00</option>
            <option value="6.00-8.00">6.00-8.00</option>
            <option value="8.00-10.00">8.00-10.00</option>

        </select>
    </div>

    <div className="input-container big">
      <label className="lm-input" htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
    </div>
    <div className="input-container mbig">
      <label className="lm-input" htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
    </div>
    <div className="ibig">
          <img src={img3} alt="" />
        </div>
  </form>
  <button type="submit">Submit</button>
  </div>
    </div>

    </div>);
};
export default CustomOrder;