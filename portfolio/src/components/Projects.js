import React, { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    title: "Pathpholio",
    image: "../media/Pathpholio.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A full-stack job application tracker with login, cloud sync, and a crisp, user-friendly UI.",
    fullDescription:
      "Pathpholio is a React + Supabase job tracker to add, edit, filter, and manage applications. It uses email/password auth with Row Level Security, a polished UI (neon card, zebra table, status chips, inline editing), fields: title, company, status, link, interview date, notes, and ships with Vite + Postgres, Netlify, free-tier setup.",
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
      "Aurwrite is a Streamlit, dark-mode storytelling app. Upload a voice note; Whisper transcribes it, a local LLM rewrites it in Fairy Tale, News, Stand-Up, or Horror, then free TTS (pyttsx3/edge-tts) narrates it back. Features: fantasy-styled UI, handwritten font, sidebar navigation, and live playback.",
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
      "Weathif is a Streamlit climate-scenario simulator and local weather storyteller. Enter any location, tweak temperature and rainfall assumptions, and instantly visualize projected impacts. Features: live geolocation, weather overlays (rain, clouds, temperature, satellite), dynamic charts, and real-time scenario feedback highlighting clear environmental consequences.",
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
      "Trovule is a Streamlit road trip planner with a sunny theme, looping video background, and confetti bursts. Enter origin, destination, and trip length to get weather peeks and a markdown itinerary with budget tips in ZAR. Features include gradient overlay, styled inputs, route pills, friendly messages, and smooth error handling.",
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
    title: "Pexzzles",
    image: "../media/Pexzzles.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A cognitive photo puzzle game for elders and brain-training enthusiasts. Search square photos from Unsplash, scramble them into tiles, and race the clock to restore the original.",
    fullDescription:
      "Pexzzles is a React photo puzzle that trains cognition with joyful simplicity. Enter your name, pick a grid (2×2–8×8), fetch square images via Unsplash, then solve by swapping or dragging tiles against a clear timer. Daily Challenge (seeded), Custom Puzzle, 3-hint 4-second peek, save/resume, and a persistent scoreboard. Elder-friendly UI.",
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
    id: 8,
    title: "Kruger National Park Travel Page",
    image: "../media/Kruger National Park.png",
    video: "../media/Coming Soon.mp4",
    shortDescription:
      "A responsive travel landing page showcasing the beauty, activities, and cultural heritage of South Africa’s Kruger National Park.",
    fullDescription:
      "This project is a responsive web page built to highlight Kruger National Park, one of South Africa’s most iconic safari destinations. It features a modern layout with sections for an introduction, detailed descriptions, activities with integrated Google Maps, and a photo gallery. The site also includes a footer with resource links and an 'About Me' section. Designed with accessibility and responsiveness in mind, it combines clean typography, grid layouts, and styled components to create an engaging user experience while strengthening front-end development skills.",
    tools: ["HTML", "CSS", "Responsive Design", "Google Maps Embed"],
    link: "https://krugernationalpark.netlify.app/",
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
