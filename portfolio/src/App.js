import React from "react";
import CustomNavbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import About from "./components/About";
import Footer from "./components/Footer";
import BackgroundOverlay from "./components/BackgroundOverlay";

function App() {
  return (
    <div>
      <BackgroundOverlay />
      <CustomNavbar />
      <Spotlight />
      <Projects />
      <Skills />
      <Experience />
      <About />
      {/* Placeholder sections */}
      <section id="projects" className="p-5 bg-light">
        Projects Section
      </section>
      <section id="experience" className="p-5">
        Experience Section
      </section>
      <section id="blog" className="p-5 bg-light">
        Blog Section
      </section>
      <section id="contact" className="p-5">
        Contact Section
      </section>
      <section id="about" className="p-5">
        About Section
      </section>
      <Footer />
    </div>
  );
}

export default App;
