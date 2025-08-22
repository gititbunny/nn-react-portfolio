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
    title: "Academic Excellence & Leadership - Meridian Combined School",
    description: [
      "Graduated with a National Senior Certificate (Bachelor's Pass)",
      "Subjects Passed: Geography, Life Sciences, English FAL, Xitsonga HL, Life Orientation, Mathematics, Physical Sciences",
      "Head Girl, Prefect, and Top 10 Achiever",
    ],
    image: "../media/2015.png",
  },
  2016: {
    title: "BSc in Computer Science & Statistics - University Of Limpopo",
    description: [
      "Enrolled at University of Limpopo for a BSc Mathematical Sciences degree (Incomplete), focusing on Computer Science and Statistics",
      "Gained foundational exposure to programming, software development, problem-solving, analytical thinking, and data analysis",
    ],
    image: "../media/2016.png",
  },
  2018: {
    title: "Pivoted to Industry-Focused Development",
    description: [
      "Transitioned from degree at the end of the school year 2018",
      "Pursued practical training and self-taught development",
      "Began building real-world projects as a hobby and exploring web development tools",
    ],
    image: "../media/2018.png",
  },
  2019: {
    title: "Gap Year and Personal Growth",
    description: [
      "Traveled to France, expanding my cultural awareness and creative perspective",
      "Immersed in global design aesthetics and lifestyle influences that later shaped my branding work",
      "Dedicated time to deepening my creative and graphic design skills in preparation for freelance work",
    ],
    image: "../media/2019.png",
  },
  2020: {
    title: "Freelance Graphic Designer",
    description: [
      "Created branding, website designs, and marketing assets for fashion, tech, and lifestyle clients",
      "Launched Etsy shop with 480+ digital product sales globally",
      "Delivered complete design packages from concept to delivery",
    ],
    image: "../media/2020.png",
  },
  2021: {
    title: "Graphic Design Intern - Rikhotso IT Solutions",
    description: [
      "Designed visuals for marketing campaigns and brand communications",
      "Explored UX/UI fundamentals and web design technologies",
      "Collaborated with sales team to track performance via engagement metrics",
    ],
    image: "../media/2021.png",
  },
  2022: {
    title: "Digital Creator & Virtual Stylist - Laust Closet",
    description: [
      "Provided remote fashion styling services and consultations",
      "Produced branded content including style guides, lookbooks, and video hauls",
      "Managed social media and created digital assets for multi-platform use",
    ],
    image: "../media/2022.png",
  },
  2024: {
    title: "Front-End Development - Delac Foundation SheCodes",
    description: [
      "Built responsive UI projects using HTML, CSS, JavaScript, and APIs",
      "Applied Bootstrap, SEO techniques, and GitHub-based workflows",
      "Obtained 5 certifications in front-end development",
    ],
    image: "../media/2024.png",
  },
  2025: {
    title:
      "Front-End and Full-Stack Development Diplomas - Delac Foundation SheCodes",
    description: [
      "Developed full-stack applications using Python, React, APIs, and Git",
      "Learned Data Structures, File Handling, AI integration, and Backend logic",
      "Obtained 8 certifications in full-stack development and 2 Diplomas in Front-End and Full-Stack Development respectively",
    ],
    image: "../media/2025.png",
  },
  FUTURE: {
    title: "What’s Next?",
    description: [
      "Currently seeking junior roles in front-end, full-stack, or software development",
      "Passionate about solving real-world problems with user-centered solutions",
      "Open to remote or international opportunities with growth potential",
    ],
    image: "../media/future.png",
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
          href="../media/Nina Nkhwashu CV.pdf"
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
