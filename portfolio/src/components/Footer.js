import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Tooltip from "bootstrap/js/dist/tooltip";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Footer.css";

function Footer() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <footer className="footer text-white mt-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">© 2025 Nina Nkhwashu. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
