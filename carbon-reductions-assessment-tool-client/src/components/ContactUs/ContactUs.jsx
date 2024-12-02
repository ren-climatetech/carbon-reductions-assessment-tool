import React, { useState } from 'react';
import './ContactUs.scss'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      companyName: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      {submitted && <p className="success-message">Thank you! Your message has been submitted.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
