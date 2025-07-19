import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css"; // optional for custom styles

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={6}>
            <p className="mb-1">© 2025 Nina Nkhwashu. All Rights Reserved.</p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="#about" className="text-white text-decoration-none">
                About
              </a>
              <a href="#projects" className="text-white text-decoration-none">
                Projects
              </a>
              <a href="#career" className="text-white text-decoration-none">
                Career Journey
              </a>
              <a href="#musings" className="text-white text-decoration-none">
                Tech Musings
              </a>
              <a href="#contact" className="text-white text-decoration-none">
                Contact
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
