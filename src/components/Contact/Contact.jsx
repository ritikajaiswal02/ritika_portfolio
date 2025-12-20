import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ FIXED: async added
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://ritikaportfolio.pythonanywhere.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      console.log('Server response:', data);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">
          Get In <span className="highlight">Touch</span>
        </h2>

        <div className="contact-content">
          <div className="contact-info animate-fade-in-up">
            <div className="info-item">
              <div className="info-row">
                <span className="info-icon">📧</span>
                <span className="info-label">Email</span>
              </div>
              <p className="info-value">ritikajaiswal010204@gmail.com</p>
            </div>

            <div className="info-item">
              <div className="info-row">
                <span className="info-icon">📍</span>
                <span className="info-label">Location</span>
              </div>
              <p className="info-value">Mumbai, India</p>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ritikajaiswal02/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ritikajaiswal0115/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form animate-fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-btn ${loading ? 'btn-disabled' : ''}`}
              disabled={loading}
            >
              {loading
                ? 'Sending...'
                : submitted
                ? 'Message Sent! ✓'
                : 'Send Message'}
            </button>

            {error && <p className="error-text">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
