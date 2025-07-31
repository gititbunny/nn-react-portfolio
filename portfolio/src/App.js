import React from "react";
import CustomNavbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import BackgroundOverlay from "./components/BackgroundOverlay";

function App() {
  return (
    <div>
      <BackgroundOverlay />
      <CustomNavbar />
      <Spotlight />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
