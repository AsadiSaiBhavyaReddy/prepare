import React, { useEffect, useState } from 'react';

const Footer = () => {
  // State to hold the current date and time
  const [currentDateTime, setCurrentDateTime] = useState('');

  // Function to update the current date and time
  const updateDateTime = () => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    setCurrentDateTime(formattedDateTime);
  };

  // Update date and time on component mount
  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Taf">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/SendMail">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>123 Main Street, Cityville</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024  Automobile Website. All rights reserved.</p>
        <p>{currentDateTime}</p> {/* Display current date and time */}
      </div>
    </footer>
  );
};

export default Footer;

// CSS styles for the footer
const styles = `
  .footer {
    background-color: black;
    color: #fff;
    padding: 30px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .footer-section {
    margin-bottom: 20px;
  }

  .footer-section h3 {
    margin-bottom: 10px;
  }

  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }

  .footer-section ul li {
    margin-bottom: 5px;
  }

  .footer-section a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-section a:hover {
    color: #f0f0f0;
  }

  .social-links a {
    display: inline-block;
    margin-right: 10px;
  }

  .footer-bottom {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
  }
`;

// Inject the CSS styles into the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
