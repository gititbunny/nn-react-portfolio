import React, { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Pathpholio",
    image: "../media/Pathpholio.png",
    video: "../media/Pathpholio.mp4",
    shortDescription:
      "An interactive job application tracker that helps users organize job applications",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://pathpholio.netlify.app/",
  },
  {
    id: 2,
    title: "The Lyrithium Engine",
    image: "../media/The Lyrithium Engine.png",
    video: "../media/The Lyrithium Engine.mp4",
    shortDescription:
      "An elegant AI-powered romantic message generator using the Shecodes AI API",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://thelyrithiumengine.netlify.app/",
  },
  {
    id: 3,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription:
      "An immersive, character-based quiz game inspired by Arcane: League of Legends.",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 4,
    title: "Tech Hub Solutions",
    image: "../media/Tech Hub Solutions.png",
    video: "../media/Tech Hub Solutions.mp4",
    shortDescription:
      "A responsive business website built for an office equipment supplier in Limpopo",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://techhubsolutions.netlify.app/",
  },
  {
    id: 5,
    title: "Coming Soon",
    image: "../media/Coming Soon.jpg",
    video: "../media/Coming Soon.mp4",
    shortDescription: "Project description coming soon",
    fullDescription: "Project description coming soon",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://comingsoon.netlify.app/",
  },
  {
    id: 6,
    title: "Pexzzles",
    image: "../media/Pexzzles.png",
    video: "../media/Pexzzles.mp4",
    shortDescription:
      "A drag-and-drop photo puzzle game that lets users search for images using the Pexels API ",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://pexzzles.netlify.app/",
  },
  {
    id: 7,
    title: "Coming Soon",
    image: "../media/Coming Soon.jpg",
    video: "../media/Coming Soon.mp4",
    shortDescription: "Project description coming soon",
    fullDescription: "Project description coming soon",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://comingsoon.netlify.app/",
  },
  {
    id: 8,
    title: "Coming Soon",
    image: "../media/Coming Soon.jpg",
    video: "../media/Coming Soon.mp4",
    shortDescription: "Project description coming soon",
    fullDescription: "Project description coming soon",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://comingsoon.netlify.app/",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const prevProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Some Of My Developer Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <div className="card-buttons">
              <button onClick={() => openModal(project)}>View More</button>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button>View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <a
          href="https://github.com/ninankhwashu"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more of my work
        </a>
        <p className="projects-extra-text">
          ...but Wait!!! I'm capable of more than just coding.
        </p>
        <div className="projects-extra-buttons">
          <a href="/digital" className="extra-btn">
            Check out my Digital Creator Work
          </a>
          <a href="/design" className="extra-btn">
            Check out my Graphic Design Work
          </a>
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-left">
              <video
                src={selectedProject.video}
                controls
                autoPlay
                loop
                muted
              ></video>
            </div>
            <div className="modal-right">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.fullDescription}</p>
              <div className="tools-used">
                {selectedProject.tools.map((tool, index) => (
                  <span key={index} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
              <a href={selectedProject.link} target="_blank" rel="noreferrer">
                <button className="view-live-btn">View Project</button>
              </a>
            </div>
            <div className="modal-nav-mobile">
              <button className="nav-arrow left" onClick={prevProject}>
                &#10094;
              </button>
              <button className="nav-arrow right" onClick={nextProject}>
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
