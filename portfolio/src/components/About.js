import React, { useState } from "react";
import "../styles/About.css";

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="text-white">Who Am I?</h2>
        <p className="about-text">
          <em>
            I’m a Junior Full-Stack Developer with a creative edge and a mindset
            for building technology that makes an impact. My path into tech has
            been anything but traditional. Every step from Mathematics and
            Computer Science to digital design and coding has shaped the way I
            think and create. I combine technical precision with creative
            vision. Whether I’m developing apps in React, Python, JavaScript,
            and APIs, or crafting intuitive user experiences, I thrive on
            turning bold ideas into reality. My projects span AI storytelling,
            climate simulation, web utilities, and interactive games, proof that
            I don’t just follow one lane, I explore the variety of what tech can
            do.
            <br />
            <br />
            My background is grounded in both learning and doing. I began my
            academic journey studying a BSc Mathematical Sciences degree with a
            focus on Computer Science and Statistics at the University of
            {!showMore && (
              <>
                ...{" "}
                <span className="read-more" onClick={handleToggle}>
                  Continue reading
                </span>
              </>
            )}
            {showMore && (
              <>
                {" "}
                Limpopo, then pivoted into hands-on creation, from freelance
                digital design to styling and brand-building with Laust Closet,
                and a Graphic Designer internship experience at RIKHOTSO IT
                Solutions. These roles sharpened my creativity, client focus,
                and design instincts, which I now apply directly to my
                development of digital solutions.
                <br />
                <br />
                In 2024, I formalized my pivot into tech with verified diplomas
                in Full-Stack and Front-End Development, and 13 certifications
                in Web Development, React, Python, and AI from Delac Foundation
                SheCodes. Since then, I’ve been focused on building real-world
                projects that connect design, logic, and storytelling into
                seamless digital experiences.
                <br />
                <br />
                What drives me isn’t just code, it’s the challenge of creating
                something meaningful, something that feels as good as it
                functions. I’m now seeking opportunities as a Junior Developer
                where I can grow, contribute, and help shape thoughtful digital
                experiences with teams who are building the future.{" "}
                <strong>I'm eager to see what comes next...</strong>
                <br />
                <span className="read-more" onClick={handleToggle}>
                  Show less
                </span>
              </>
            )}
          </em>
        </p>
      </div>
    </section>
  );
}

export default About;
