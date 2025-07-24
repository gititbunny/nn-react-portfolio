import React, { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 2,
    title: "Pathpholio",
    image: "../media/Pathpholio.png",
    video: "../media/Pathpholio.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://pathpholio.netlify.app/",
  },
  {
    id: 3,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 4,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 5,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 6,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 7,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
  },
  {
    id: 8,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription: "Lore-based interactive quiz game",
    fullDescription:
      "An immersive quiz game exploring the world of Arcane, complete with custom logic, character-specific arcs, DOM scripting, and interactive animations.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://arcanequizgame.netlify.app/",
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
