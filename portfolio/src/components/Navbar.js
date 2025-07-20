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
            src="/logo192.png" // replace with your logo path
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
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#career">Career Journey</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#musings">Tech Musings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
