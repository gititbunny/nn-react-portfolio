import React, { useEffect } from "react";
import "../styles/Experience.css";

const years = [
  "2015",
  "2016",
  "2018",
  "2018",
  "2020",
  "2021",
  "2022",
  "2024",
  "2025",
  "FUTURE",
];

const Experience = () => {
  useEffect(() => {
    const container = document.getElementById("particles");
    const containerRect = container.getBoundingClientRect();
    const particles = [];

    years.forEach((year) => {
      const particle = document.createElement("div");
      particle.className = `timeline-particle ${
        year === "FUTURE" ? "future" : ""
      }`;
      particle.textContent = year;
      particle.dataset.year = year;

      const size = 90;
      const x = Math.random() * (containerRect.width - size * 2) + size;
      const y = Math.random() * (containerRect.height - size * 2) + size;

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      container.appendChild(particle);
      particles.push({
        element: particle,
        x,
        y,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
      });
    });

    function animateParticles() {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const size = 80;

      particles.forEach((p) => {
        let nextX = p.x + p.vx;
        let nextY = p.y + p.vy;

        if (nextX + size > width || nextX < 0) p.vx *= -1;
        if (nextY + size > height || nextY < 0) p.vy *= -1;

        p.x += p.vx;
        p.y += p.vy;

        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }, []);

  return (
    <section id="experience">
      <h2 className="experience-title">
        Professional Experience & Academic Milestones
      </h2>
      <p className="experience-intro">
        Every year brought growth. Explore the milestones that shaped me — pick
        a year and see for yourself
      </p>
      <div className="experience-box">
        <div className="particle-container" id="particles"></div>
        <button className="cv-download">Download CV</button>
      </div>
    </section>
  );
};

export default Experience;
