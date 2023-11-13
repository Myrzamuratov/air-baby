import React from "react";
import "./Footer.css";
import logo from "../../images/Logo (3).png";

const Footer = () => {
  return (
    <footer className="footer_main">
      <figure className="footer_logo">
        <img src={logo} alt="Logo" />
      </figure>
      <p>
        <small>
          © Donation and Surrogacy by Myairbaby.com. All rights Reserved.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
