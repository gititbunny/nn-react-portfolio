import { Routes, Route } from "react-router-dom";
import React from "react";
import CustomNavbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DigitalCreator from "./pages/DigitalCreator";
import GraphicDesign from "./pages/GraphicDesign";
import Footer from "./components/Footer";
import BackgroundOverlay from "./components/BackgroundOverlay";

function App() {
  return (
    <>
      <BackgroundOverlay />
      <CustomNavbar />
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Spotlight />
              <About />
              <Skills />
              <Projects />
              <section id="career" className="p-5">
                Career Journey Section
              </section>
              <section id="musings" className="p-5 bg-light">
                Tech Musings Section
              </section>
              <section id="contact" className="p-5">
                Contact Section
              </section>
              <Footer />
            </>
          }
        />

        {/* Digital Creator Page */}
        <Route
          path="/digital-creator"
          element={
            <>
              <DigitalCreator />
              <Footer />
            </>
          }
        />

        {/* Graphic Design Page */}
        <Route
          path="/graphic-design"
          element={
            <>
              <GraphicDesign />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
