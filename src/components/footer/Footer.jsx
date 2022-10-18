import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        NORIS
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/romannoris0402/" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/roman_noris/" target="_blank">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyrights">
        <small>&copy; NORIS. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
