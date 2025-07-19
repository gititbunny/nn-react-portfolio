import React from "react";
import "../styles/Spotlight.css";

function Spotlight() {
  return (
    <section id="spotlight">
      <div className="video-background">
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/media/background-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="spotlight-container d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="profile-image mb-4 mb-md-0">
          <img src="/media/pp.jpg" alt="Nina Nkhwashu" />
        </div>

        <div className="spotlight-text px-4">
          <h1>
            Hey Stranger 🛸,
            <br />
            Welcome to My Universe!
          </h1>
          <p>
            I’m Nina Nkhwashu, a Creative Technologist, Front-End Developer, and
            Digital Designer on a mission to turn bold ideas into powerful
            digital experiences. This portfolio is a glimpse into my world of
            innovation, design, and tech.
            <br />
            <em>Strap in...the ride's just getting started!</em>
          </p>
          <a
            href="#projects"
            className="btn btn-outline-light explore-button mt-3"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
