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
      const padding = 100; // space to prevent overlap with edges and button
      const x = Math.random() * (containerRect.width - size - padding);
      const y = Math.random() * (containerRect.height - size - padding);

      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      container.appendChild(particle);
      particles.push({
        element: particle,
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      });
    });

    function animateParticles() {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      const size = 90;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x + size >= width) p.vx *= -1;
        if (p.y <= 0 || p.y + size >= height - 60) p.vy *= -1; // 60px buffer for CV button

        p.element.style.left = `${p.x}px`;
        p.element.style.top = `${p.y}px`;
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }, []);

  return (
    <section className="experience-section">
      <h2 className="experience-title">
        Professional Experience & Academic Milestones
      </h2>
      <p className="experience-intro">
        Every year brought growth. Explore the milestones that shaped me — pick
        a year and see for yourself
      </p>
      <div className="experience-box">
        <button className="cv-download">Download CV</button>
        <div className="particle-container" id="particles"></div>
      </div>
    </section>
  );
};

export default Experience;
