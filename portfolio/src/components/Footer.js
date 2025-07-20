import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Footer.css";

function Footer() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    [...tooltipTriggerList].forEach((tooltipEl) => {
      new window.bootstrap.Tooltip(tooltipEl);
    });
  }, []);

  return (
    <footer className="footer text-white py-4 mt-5">
      <div className="social-icons d-flex justify-content-md-end justify-content-center gap-4">
        <a
          href="https://github.com/ninankhwashu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          data-bs-toggle="tooltip"
          title="View my GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ninankhwashu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
          data-bs-toggle="tooltip"
          title="Connect on LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:ninankhwashu@gmail.com"
          className="text-white"
          data-bs-toggle="tooltip"
          title="Send me an email"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
