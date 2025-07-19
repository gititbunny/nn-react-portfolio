import React from "react";
import CustomNavbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Spotlight />

      {/* Placeholder sections */}
      <section id="about" className="p-5">
        About Section
      </section>
      <section id="projects" className="p-5 bg-light">
        Projects Section
      </section>
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
    </div>
  );
}

export default App;
