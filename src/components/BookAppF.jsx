import React, { useState } from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import '../css/forms.css';
import img3 from "../imgs/mdimg1.png";
function BookAppF({onClose}){
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [store, setStore] = useState('');
  const [comm, setComm] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [alternativeDate, setAlternativeDate] = useState(null); 
  const [alternativeTime, setAlternativeTime] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ title, firstName, lastName, email, country, store, comm, phone, message, selectedDate, selectedTime, alternativeDate, alternativeTime });
    
    setTitle('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setCountry('');
    setStore('');
    setComm('');
    setPhone('');
    setMessage('');
    setSelectedDate(null);
    setSelectedTime(null);
    setAlternativeDate(null);
    setAlternativeTime(null);
  };

  const bookAppointment = () => {
    console.log("Appointment booked for:", selectedDate, selectedTime);
  };

  return(
    <div>
       <div className="popup">
    <div className="popup-inner">
    <button className="close-btn" onClick={onClose}>X</button>
    <h1>Book An Appointment</h1>
      <form className='leavemess-form2' onSubmit={handleSubmit}>
     {/*   <div className="input-container">
          <label>Title:</label>
          <select value={title} onChange={(e) => setTitle(e.target.value)}>
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
        </div>*/}
        <div className="input-container">
          <label className="lm-ipnut">First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-container">
          <label className="lm-ipnut">Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-container">
          <label className="lm-ipnut">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <label className="lm-ipnut">Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="input-container ipc-swid">
          <label className="lm-ipnut" htmlFor="country">Country:</label>
          <select
           id="country"
           value={country}
           onChange={(e) => setCountry(e.target.value)}
           required >
            <option value="">Select</option>
            <option value="Singapore">Singapore</option>
            </select>

        </div>
        
    {/*    <div className="input-container">
          <label className="lm-ipnut" htmlFor="store">Preferred Store:</label>
          <select id="store" value={store} onChange={(e) => setStore(e.target.value)} >
            <option value="">Select</option>
            </select>
      </div> */}
        <div className="input-container">
          <label className="lm-ipnut">Communication Preference:</label>
          <input type="text" value={comm} onChange={(e) => setComm(e.target.value)} />
        </div>
        <div className="input-container mbig">
          <label className="lm-ipnut ">Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className="input-container">
          <label className="lm-ipnut">Select Date:</label>
          <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
        </div>
        <div className="input-container">
          <label className="lm-ipnut">Select Time:</label>
          <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
        </div>
        <div className="input-container sbig">
          <label className="lm-ipnut">Alternative Date:</label>
          <DatePicker selected={alternativeDate} onChange={date => setAlternativeDate(date)} />
        </div>
        <div className="input-container">
          <label className="lm-ipnut">Alternative Time:</label>
          <input type="time" value={alternativeTime} onChange={(e) => setAlternativeTime(e.target.value)} />
        </div>
        <div className="ibig">
          <img src={img3} alt="" />
        </div>
      </form>
      <button type="submit">Book Appointment</button>
    </div>
    </div>
    </div>
  );
};

export default BookAppF;
