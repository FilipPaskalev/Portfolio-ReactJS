// Hooks
import { useState, useEffect } from "react";

// React bootstrap components
import { Container, Navbar, Nav } from "react-bootstrap";

// React router
import { Link } from "react-router-dom";

// Custom components
import CustomNavBarBrand from "../navBarBrand/NavBarBrand";

const Navigator = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
    >
      <Container>
        <CustomNavBarBrand windowWidth={windowWidth} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/education">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/home">
              Skills
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
