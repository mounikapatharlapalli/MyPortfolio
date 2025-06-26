import React, { useState } from 'react';
import axios from 'axios';
import contactImage from '../assets/cc1.jpg';

// Use env var, fallback to localhost
const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${API}/contact`, formData);
      if (res.data.success) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setError('Failed to send. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    }
  };

  const isMobile = window.innerWidth < 768;

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: 'wrap',
      maxWidth: '1000px',
      margin: '50px auto',
      background: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 6px 25px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: 'Segoe UI, sans-serif',
    },
    formContainer: { flex: 1, padding: '35px', minWidth: '300px' },
    imageContainer: {
      flex: 1,
      minWidth: '300px',
      backgroundColor: '#f0f8ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: { width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'cover', padding: '20px' },
    title: { fontSize: '2rem', marginBottom: '30px', color: '#2a6f97', fontWeight: 'bold' },
    row: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '15px',
      marginBottom: '15px',
    },
    input: {
      flex: 1,
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #cce0ff',
      backgroundColor: '#f0f8ff',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      height: '120px',
      borderRadius: '8px',
      border: '1px solid #cce0ff',
      backgroundColor: '#f0f8ff',
      fontSize: '1rem',
      resize: 'none',
      marginBottom: '15px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2a6f97',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    successMessage: {
      textAlign: 'center',
      color: '#198754',
      fontWeight: 'bold',
      marginTop: '15px',
    },
    errorMessage: {
      textAlign: 'center',
      color: '#dc3545',
      fontWeight: 'bold',
      marginTop: '15px',
    }
  };

  return (
    <section id="contact">
      <div style={styles.wrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.row}>
              <input type="text" name="firstName" placeholder="First Name" style={styles.input} value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" style={styles.input} value={formData.lastName} onChange={handleChange} required />
            </div>
            <div style={styles.row}>
              <input type="email" name="email" placeholder="Email Address" style={styles.input} value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" style={styles.input} value={formData.phone} onChange={handleChange} required />
            </div>
            <textarea name="message" placeholder="Your Message" style={styles.textarea} value={formData.message} onChange={handleChange} required />
            <button type="submit" style={styles.button}>Send 📤</button>
          </form>
          {submitted && <div style={styles.successMessage}>Thanks! Your message has been sent.</div>}
          {error && <div style={styles.errorMessage}>{error}</div>}
        </div>
        <div style={styles.imageContainer}>
          <img src={contactImage} alt="Contact Us" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
