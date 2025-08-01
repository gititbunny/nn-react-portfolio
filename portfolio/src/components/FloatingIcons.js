import React from "react";
import "../styles/FloatingIcons.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function FloatingIcons() {
  return (
    <div className="floating-icons">
      <div className="icon-wrapper">
        <a
          href="https://github.com/ninankhwashu"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
          <span className="tooltip">GitHub</span>
        </a>
      </div>
      <div className="icon-wrapper">
        <a
          href="https://www.linkedin.com/in/ninankhwashu"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
          <span className="tooltip">LinkedIn</span>
        </a>
      </div>
      <div className="icon-wrapper">
        <a href="mailto:ninankhwashu@gmail.com" aria-label="Email">
          <FaEnvelope />
          <span className="tooltip">Email</span>
        </a>
      </div>
    </div>
  );
}
