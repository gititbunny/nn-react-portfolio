import React from "react";
import "../styles/Spotlight.css";

function Spotlight() {
  return (
    <section id="spotlight" aria-labelledby="spotlight-heading">
      <div class="spotlight-container d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div class="profile-image mb-4 mb-md-0">
          <img
            src="/media/pp.jpg"
            alt="Portrait of Nina Nkhwashu, Full-Stack Developer"
          />
        </div>

        <div class="spotlight-text px-4">
          <h1 id="spotlight-heading">Hi there 👽, I’m Nina!</h1>
          <p class="tagline">
            A Full-Stack Developer with a creative edge. Skilled in
            React, Python, JavaScript, and APIs.{" "}
            <em>I turn ideas into experiences that make an impact.</em>
          </p>
          <p class="subline">
            From AI storytelling to climate simulation, from games to utility
            tools, I thrive on variety and the challenge of turning bold
            concepts into reality. My work blends technical precision with a
            vision for digital experiences that stand out and connect with
            people.
          </p>

          <div class="button-row">
            <a
              href="#projects"
              class="btn btn-outline-light explore-button"
              aria-label="Jump to projects"
            >
              View Projects
            </a>
            <a
              href="../media/Nina Nkhwashu Resume.pdf"
              class="btn btn-outline-light download-button"
              download
              aria-label="Download CV as PDF"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
