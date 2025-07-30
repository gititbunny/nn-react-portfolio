import React from "react";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            <strong>Contact Me:</strong> <br />
            <a href="mailto:ninankhwashu@gmail.com">ninankhwashu@gmail.com</a>
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/ninankhwashu"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ninankhwashu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:ninankhwashu@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
