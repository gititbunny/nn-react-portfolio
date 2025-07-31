import React, { useState } from "react";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      })
      .catch(() => {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE (FORM) */}
        <div className="contact-right">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            {/* Required hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
              </label>
            </p>

            <p>Send A Message</p>
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

            {formStatus === "success" && (
              <p className="success-msg">
                Thanks for reaching out! I’ll be in touch soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="error-msg">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
