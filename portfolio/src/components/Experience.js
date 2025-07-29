import React, { useEffect, useRef, useState } from "react";
import "../styles/Experience.css";

const years = [
  "2015",
  "2016",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2024",
  "2025",
  "FUTURE",
];

const experienceData = {
  2015: {
    title: "Academic Excellence & Leadership",
    description: [
      "Graduated with a National Senior Certificate (Bachelor's Pass)",
      "Passed: Geography, Life Sciences, English FAL, Xitsonga HL, LO, Math, Physical Sciences",
      "Head Girl, Prefect, and Top 10 Achiever",
    ],
    image: "../media/experience-placeholder.png",
  },
  2016: {
    title: "Foundation in Tech Begins",
    description: [
      "Enrolled in BSc Mathematical Sciences: Computer Science & Stats",
      "Built a solid foundation in analytical thinking",
    ],
    image: "../media/experience-placeholder.png",
  },
  2018: {
    title: "A Strategic Shift",
    description: [
      "Paused formal education to pursue independent growth",
      "Shifted to skill-building and real-world experience",
    ],
    image: "../media/experience-placeholder.png",
  },
  2019: {
    title: "Self-Taught Designer",
    description: [
      "Learned Graphic Design independently",
      "Traveled to France for a confidential campaign under NDA",
    ],
    image: "../media/experience-placeholder.png",
  },
  2020: {
    title: "Freelance Growth",
    description: [
      "Freelance Graphic Designer",
      "Launched Etsy store – 474+ digital art sales globally",
    ],
    image: "../media/experience-placeholder.png",
  },
  2021: {
    title: "Professional Design Internship",
    description: [
      "Graphic Design Intern at Rikhotso IT Solutions",
      "Hands-on experience with professional editing tools",
    ],
    image: "../media/experience-placeholder.png",
  },
  2022: {
    title: "Creative Expansion",
    description: [
      "Completed internship",
      "Launched Virtual Stylist brand + Digital Creator services",
    ],
    image: "../media/experience-placeholder.png",
  },
  2024: {
    title: "Entering Tech",
    description: [
      "Completed SheCodes Software Dev Cert Program",
      "Built web apps, landing pages, explored AI basics",
    ],
    image: "../media/experience-placeholder.png",
  },
  2025: {
    title: "Advancing Full-Stack Skills",
    description: [
      "Currently upskilling in React, Python, APIs, Bootstrap",
      "Focused on building scalable real-world apps",
    ],
    image: "../media/experience-placeholder.png",
  },
  FUTURE: {
    title: "Future Goals",
    description: [
      "Master AI, Data Structures, and Full-Stack Tools",
      "Earn more certifications + return to university",
      "Join a growth-driven team and build AI-powered tools",
    ],
    image: "../media/experience-placeholder.png",
  },
};

export default function Experience() {
  const containerRef = useRef();
  const [particles, setParticles] = useState([]);
  const [activeYear, setActiveYear] = useState(null);
  const bubbleSize = 150;

  const initializeParticles = () => {
    const bounds = containerRef.current.getBoundingClientRect();
    const newParticles = years.map((year) => ({
      year,
      x: Math.random() * (bounds.width - bubbleSize),
      y: Math.random() * (bounds.height - bubbleSize),
      vx: Math.random() * 2.8 - 1,
      vy: Math.random() * 2.8 - 1,
    }));
    setParticles(newParticles);
  };

  useEffect(() => {
    initializeParticles();
  }, []);

  useEffect(() => {
    let frame;
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let { x, y, vx, vy } = p;
          const bounds = containerRef.current.getBoundingClientRect();

          if (x + bubbleSize >= bounds.width || x <= 0) vx *= -1;
          if (y + bubbleSize >= bounds.height || y <= 0) vy *= -1;

          return { ...p, x: x + vx, y: y + vy, vx, vy };
        })
      );
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const nextYear = () => {
    const index = years.indexOf(activeYear);
    setActiveYear(years[(index + 1) % years.length]);
  };

  const prevYear = () => {
    const index = years.indexOf(activeYear);
    setActiveYear(years[(index - 1 + years.length) % years.length]);
  };

  return (
    <section id="experience">
      <h2>Professional Experience & Academic Milestones</h2>
      <p className="experience-intro">
        Every year brought growth. Explore the milestones that shaped me!
        <br /> <em>Pick a year and see for yourself</em>
      </p>

      <div className="experience-wrapper">
        <div className="experience-box" ref={containerRef}>
          {particles.map((p, i) => (
            <div
              key={i}
              className={`year-bubble ${p.year === "FUTURE" ? "future" : ""}`}
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                width: `${bubbleSize}px`,
                height: `${bubbleSize}px`,
              }}
              onClick={() => setActiveYear(p.year)}
            >
              {p.year}
            </div>
          ))}
        </div>

        <a
          href="../media/ROLW Resume CV Nina Nkhwashu.pdf"
          className="download-btn"
          download
        >
          Download CV
        </a>
      </div>

      {activeYear && (
        <div className="year-modal">
          <div className="modal-card">
            <button className="close-btn" onClick={() => setActiveYear(null)}>
              &times;
            </button>
            <div className="modal-grid">
              <img
                src={experienceData[activeYear].image}
                alt="Experience"
                className="modal-img"
              />
              <div className="modal-info">
                <h3>{activeYear}</h3>
                <h4>{experienceData[activeYear].title}</h4>
                <ul>
                  {experienceData[activeYear].description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="modal-nav">
                  <button onClick={prevYear}>&#10094;</button>
                  <button onClick={nextYear}>&#10095;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
