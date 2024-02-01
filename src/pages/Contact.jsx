import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // handles changes to the input fields and updates state variables
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  // checks to see if any of the fields are empty, and displays error message if so
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('Please fill out all fields!');
      return;
    }

    // clear the forms after successful submit
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="contact-page">
      <h1 className="contact-header">Get in touch!</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="contact">
        Please fill out this form with your name, email, and message.
      </p>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-area">
          <label htmlFor="exampleFormControlTextarea1">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Type your message here..."
            name="message"
            value={message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;