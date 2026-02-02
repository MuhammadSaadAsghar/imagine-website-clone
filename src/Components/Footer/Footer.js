import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="Footer-icon">
          <a href="/">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-pinterest"></i>
          </a>
        </div>
        <div className="copyright">
            <p>Copyright &#169;All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by <a href="/">Saad</a></p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
