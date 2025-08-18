import React, { useState } from "react";
import StatCounter from "./StatCounter";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Pathpholio",
    image: "../media/Pathpholio.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A full-stack job application tracker with login, cloud sync, and a crisp, recruiter-friendly UI.",
    fullDescription:
      "Pathpholio is a React + Supabase job application tracker that lets users securely add, edit, filter, and manage applications across devices. It features email/password auth with Row Level Security (users only see their own data), a polished UI with a neon-green form card, zebra-striped data table, status chips, and inline editing. Each record supports title, company, status, job URL, interview date, and notes. The app is built with Vite, uses Supabase Postgres + Auth with SQL policies and triggers, and deploys to Netlify with environment-based configuration. Designed to feel like a production mini-SaaS while staying entirely on free tiers.",
    tools: [
      "React",
      "Vite",
      "JavaScript (ES202x)",
      "Supabase (Postgres)",
      "Supabase Auth",
      "Row Level Security (RLS)",
      "SQL (policies & triggers)",
      "React Router",
      "@supabase/supabase-js",
      "HTML",
      "CSS",
      "Netlify (deploy)",
    ],
    link: "https://pathpholio.netlify.app",
  },
  {
    id: 2,
    title: "Aurwrite",
    image: "../media/Aurwrite.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "An AI-powered 'Audio-to-Story' creator tool that transforms voice notes into narrated stories in multiple styles.",
    fullDescription:
      "Aurwrite is a fantasy-themed, dark-mode storytelling app built with Streamlit. Users upload a short audio file (like a voice note), which is transcribed with Whisper, rewritten in one of four styles: Fairy Tale, News Article, Stand-Up Comedy, or Horror, using a local LLM, and then narrated back using free TTS libraries (pyttsx3 or edge-tts). Features include a handwritten font style, fantasy-inspired dark UI, sidebar navigation, and live playback",
    tools: [
      "Python",
      "Streamlit",
      "OpenAI Whisper",
      "Transformers",
      "pyttsx3",
      "edge-tts",
      "FFmpeg",
    ],
    link: "https://aurwrite.streamlit.app/",
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
    link: "https://weathif.streamlit.app",
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
    link: "https://trovule.streamlit.app",
  },
  {
    id: 5,
    title: "Tech Hub Solutions",
    image: "../media/Tech Hub Solutions.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A pixel-perfect React single-page site for an office equipment supplier—fully responsive with theme toggle, smooth navigation, and clean UX.",
    fullDescription:
      "Tech Hub Solutions is a landing site for a Limpopo-based office equipment supplier providing sales, maintenance, and supplies to businesses across Tzaneen and surrounding areas. Features include a sticky header with smooth in-page scrolling (80px offset), a mobile drawer menu with body scroll lock, persistent light/dark theme toggle (localStorage), product category filters with an 'Add to Cart' modal, a testimonials carousel via react-slick, animated KPI counters using IntersectionObserver, a contact form with success modal, a back-to-top control, and small-screen polish for the brand row and hero image. Bootstrap is used for utilities while the custom CSS retains the visual identity.",
    tools: [
      "React",
      "Vite",
      "Bootstrap",
      "React Bootstrap",
      "React Slick",
      "Slick Carousel CSS",
      "Font Awesome",
      "Google Fonts",
      "CSS",
      "JavaScript",
      "IntersectionObserver",
      "Netlify",
    ],
    link: "https://github.com/gititbunny/tech-hub-solutions",
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
    link: "https://thelyrithiumengine.netlify.app",
  },
  {
    id: 7,
    title: "Pexzzles",
    image: "../media/Pexzzles.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A cognitive photo puzzle game for elders and brain-training enthusiasts. Search square photos from Unsplash, scramble them into tiles, and race the clock to restore the original.",
    fullDescription:
      "Pexzzles is a React-based cognitive training photo puzzle designed for simplicity and joy. Players enter their name (used in results), choose a grid size (2×2, 4×4, 6×6, 8×8), and search square-only images via the Unsplash API. The chosen photo is scrambled into tiles—solvable by tapping to swap or drag-and-drop—and a large, readable timer tracks progress. A Daily Challenge mode uses a seeded shuffle so everyone gets the same layout each day, while Custom Puzzle lets users pick any keyword. Features include a 3-hint system (4-second original-image peek with automatic countdown), success modal with confetti and rotating encouraging messages, non-destructive Save Game, Start New Game, and a persistent Scoreboard Drawer (localStorage) showing time, moves, hints, grid size, and attribution. The interface is elder-friendly: centered layout, big buttons, clear contrast, and strict square images to avoid awkward crops. Unsplash requirements are respected (hotlinking, download trigger, proper photographer and Unsplash attribution).",
    tools: [
      "React",
      "Vite",
      "Bootstrap",
      "React Icons",
      "react-confetti",
      "HTML5 Drag and Drop",
      "Unsplash API",
      "LocalStorage",
    ],
    link: "https://pexzzles.netlify.app",
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
    link: "https://arcanequizgame.netlify.app",
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
        <StatCounter label="Projects Completed" end={32} />
        <StatCounter label="GitHub Contributions" end={630} />
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
