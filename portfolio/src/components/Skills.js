import React from "react";
import "../styles/Skills.css";

function Skills() {
  const technicalSkills = [
    "React.js",
    "JavaScript",
    "Python",
    "APIs",
    "HTML",
    "CSS",
    "Responsive Design",
    "Bootstrap",
    "Git",
    "GitHub",
    "VS Code",
    "Netlify",
    "AWS S3",
    "Figma",
    "Inkscape",
    "Adobe Photoshop",
    "Illustrator",
    "Premiere Pro",
    "InDesign",
    "Canva",
    "CapCut",
    "DaVinci Resolve",
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Analytical Thinking",
    "Team Collaboration",
    "Adaptability",
    "Time Management",
    "Creativity",
    "Client Relations",
    "Clear Information Delivery",
    "Critical Thinking",
    "Growth-Focused Mindset",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="text-white text-center mb-5">
          What I Bring to the Table
        </h2>
        <div className="skills-grid">
          <div className="skills-column">
            <h3>Skills & Tools</h3>
            <div className="tag-group">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-column">
            <h3>Other Skills</h3>
            <div className="tag-group">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
