import React from "react";
import './style.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer id="contact">
    <div className="footer-top">
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Blog</h4>
        <p>FAQ</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Support</p>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>furaha Health Street</p>
        <p>City, Country</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: info@tiba.com</p>
      </div>

      <div className="footer-contact">
        <h4>News</h4>
        <p>Events</p>
        <p>Testimonials</p>
        <p>Awards</p>
        <p>Locations</p>
      </div>

      <div className="footer-social">
        <h4>Connect with Us</h4>
        <ul>
        <li><a href="#"><FaFacebook /></a></li>
        <li><a href="#"><FaTwitter /></a></li>
        <li><a href="#"><FaInstagram /></a></li>
        <li><a href="#"><FaLinkedin /></a></li>
       </ul>
      </div>

    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 Tiba Health Website. All rights reserved.</p>
      <p>Designed by Chepkemboi</p>
    </div>
  </footer>
    );
}

export default Footer