import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} Nina Nkhwashu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
