import { useState } from "react";

// React Bootstrap
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";

// React Router
import { Link } from "react-router-dom";

// Assets
import avatarImage from "./assets/avatar.jpg"; // Adjust the path as necessary

const CustomNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image src={avatarImage} roundedCircle />
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNav;
