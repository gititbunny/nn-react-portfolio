import React, { useState } from "react";
import StatCounter from "./StatCounter";
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
      "An interactive job application tracker that helps users organize and monitor their job applications in one place, with smart filtering and localStorage-powered persistence. Features: Add, filter, and delete job applications with live UI updates, localStorage persistence, status-based filtering, and real-time alerts.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://pathpholio.netlify.app/",
  },
  {
    id: 2,
    title: "Aurwrite",
    image: "../media/Aurwrite.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "An AI-powered 'Audio-to-Story' remix tool that transforms voice notes into narrated stories in multiple styles.",
    fullDescription:
      "Aurwrite is a fantasy-themed, dark-mode storytelling app built with Streamlit. Users upload a short audio file (like a voice note), which is transcribed with Whisper, rewritten in one of four styles — Fairy Tale, News Article, Stand-Up Comedy, or Horror — using a local LLM, and then narrated back using free TTS libraries (pyttsx3 or edge-tts). Features include a handwritten font style, fantasy-inspired dark UI, sidebar navigation, live playback, and LinkedIn credit link.",
    tools: [
      "Python",
      "Streamlit",
      "OpenAI Whisper",
      "Transformers",
      "pyttsx3",
      "edge-tts",
      "FFmpeg",
    ],
    link: "https://github.com/ninankhwashu/aurwrite",
  },
  {
    id: 3,
    title: "Weathif",
    image: "../media/Weathif.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A climate scenario simulator that visualizes how temperature and rainfall changes could impact local environments.",
    fullDescription:
      "Weathif is a Streamlit-powered climate scenario simulator and local weather storyteller. It allows users to enter any location, adjust hypothetical climate change factors like temperature and rainfall, and visualize the projected environmental impact. Features include live geolocation, weather overlays (rain, clouds, temperature, satellite), dynamic charts, and real-time scenario feedback with clear environmental consequences.",
    tools: [
      "Python",
      "Streamlit",
      "Pandas",
      "Matplotlib",
      "Folium",
      "Geopy",
      "OpenWeatherMap API",
    ],
    link: "https://weathif.streamlit.app/",
  },
  {
    id: 4,
    title: "Trovule",
    image: "../media/Trovule.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A playful road trip buddy that checks weather for your route and generates a simple and quick day by day itinerary with ZAR estimates.",
    fullDescription:
      "Trovule is a Streamlit road trip planner with a permanent video background, a sunny theme, and fun confetti bursts. Enter origin, destination, and trip length to fetch quick weather peeks for both cities and receive a concise markdown itinerary with daily budget guidance in ZAR. The UI uses a fixed video layer with a soft gradient veil, custom input styling, dotted route pills, and friendly messages. Robust error handling keeps things smooth when APIs fail.",
    tools: [
      "Python",
      "Streamlit",
      "HTML",
      "CSS",
      "JavaScript",
      "python-dotenv",
      "canvas-confetti",
      "SheCodes API",
    ],
    link: "https://trovule.streamlit.app/",
  },
  {
    id: 5,
    title: "Tech Hub Solutions",
    image: "../media/Tech Hub Solutions.png",
    video: "../media/Tech Hub Solutions.mp4",
    shortDescription:
      "A responsive business website built for an office equipment supplier in Limpopo",
    fullDescription:
      "Tech Hub Solutions is a professionally crafted website that showcases the offerings of an office supply company. Features: dynamic product filtering, a customer testimonial slider, animated business stats, dark mode toggle, smooth scrolling navigation, and interactive modals for service requests and cart actions.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://techhubsolutions.netlify.app/",
  },
  {
    id: 6,
    title: "The Lyrithium Engine",
    image: "../media/The Lyrithium Engine.png",
    video: "../media/The Lyrithium Engine.mp4",
    shortDescription:
      "An elegant AI-powered romantic message generator using the Shecodes AI API",
    fullDescription:
      "An elegant AI-powered romantic message generator that transforms user prompts into short, romantic messages with a single click. It uses natural language processing to craft personalized 8-line messages in real time. Features: Typewriter animation for the message output, dynamic user input, SheCodes AI API integration, stylized message formatting, form validation, and loading indicator.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://thelyrithiumengine.netlify.app/",
  },
  {
    id: 7,
    title: "Pexzzles",
    image: "../media/Pexzzles.png",
    video: "../media/Pexzzles.mp4",
    shortDescription:
      "A drag-and-drop photo puzzle game that lets users search for images using the Pexels API ",
    fullDescription:
      "A drag-and-drop photo puzzle game that lets users search for images using the Pexels API and solve them as customizable grid-based puzzles. Features: Drag & drop puzzle logic, image search, infinite scroll, timer, solution hint, and score tracking. ",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://pexzzles.netlify.app/",
  },
  {
    id: 8,
    title: "Arcane Chronicles",
    image: "../media/Arcane Chronicles.png",
    video: "../media/Arcane Chronicles.mp4",
    shortDescription:
      "An immersive, character-based quiz game inspired by Arcane: League of Legends.",
    fullDescription:
      "An immersive, character-based quiz game inspired by Arcane: League of Legends. Players test their knowledge of the series by answering character-based questions, unlocking rich lore & interactive visuals along the way. Features: Character selection system, quiz logic with score tracking, progress bar, custom animations (shimmer, shake, glow), real-time feedback, and a localStorage-based scoreboard.",
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
      <h2 className="projects-title">Some Of My Projects</h2>
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
      </div>

      <div className="stats-row">
        <StatCounter label="Projects Completed" end={27} />
        <StatCounter label="GitHub Contributions" end={507} />
        <StatCounter label="Tools & Technologies" end={34} />
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
