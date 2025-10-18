import React from "react";
import "./Footer.css";
import logo from "../../assests/logo.png";

const Footer = () => {
  return (
    <footer className="signlang__footer">
      <div className="signlang__footer-logo">
        <img src="pinklogo.png" alt="signlang_logo" />
      </div>

      <div className="signlang__footer-copyright">
        <h3>
          © 2025 <span>SLR</span> — All rights reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
