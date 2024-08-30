import { useState, useEffect } from "react";
import "../css/forms.css";
function LeaveUsMess({ onClose }) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [budget, setBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      firstName,
      lastName,
      email,
      country,
      subject,
      budget,
      phone,
      message,
    });

    setTitle("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setSubject("");
    setBudget("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h1>Leave Us a Message</h1>
        <form className="leavemess-form" onSubmit={handleSubmit}>
          {
    /*<div>
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
    </div>
   
   */}
          <div className="input-container">
            <label className="lm-input" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label className="lm-input" htmlFor="lastName">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label className="lm-input" htmlFor="country">
              Country
            </label>
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

          <div className="input-container">
            <label className="lm-input" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label className="lm-input" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label className="lm-input" htmlFor="budget">
              Budget Range (SGD)
            </label>
            <select
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="1000"> &lt; $1000</option>
              <option value="5000">$1000 - $5000</option>
              <option value="10000">$5000 - $10,000</option>
            </select>
          </div>
          <div className="input-container big">
            <label className="lm-input" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="input-container mbig">
            <label className="lm-input" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </form>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default LeaveUsMess;
