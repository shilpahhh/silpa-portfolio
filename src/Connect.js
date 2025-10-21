import React, { useState } from 'react';
import './Connect.css';

function Connect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:silpababu2005@gmail.com?subject=Portfolio Message from ${form.name}&body=${form.message}`;
  };

  return (
    <div className="connect-container" data-aos="fade-up">
      <h1 className="section-heading">Connect With Me</h1>
      <form className="connect-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Connect;