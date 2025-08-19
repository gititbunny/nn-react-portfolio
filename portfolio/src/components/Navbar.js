import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css"; // optional for custom styles

function CustomNavbar() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Navbar expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand onClick={refreshPage} style={{ cursor: "pointer" }}>
          <img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          Nina Nkhwashu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
