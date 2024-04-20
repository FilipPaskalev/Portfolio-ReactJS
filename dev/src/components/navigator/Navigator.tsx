// Hooks
import { useState, useEffect } from 'react';

// React bootstrap components
import { Navbar, Nav } from 'react-bootstrap';

// React router
import { Link } from 'react-router-dom';

// Custom components
import NavBarBrand from '../navBarBrand/NavBarBrand';

enum EnumMobileBreakpointTags {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xl',
  XXLarge = 'fluid',
}

const Navigator = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileBreakpoint: EnumMobileBreakpointTags = EnumMobileBreakpointTags.Medium;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand={mobileBreakpoint} className='navbar bg-primary fixed-top'>
      <NavBarBrand windowWidth={windowWidth} />
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'></Nav>
        <Nav>
          <Nav.Link as={Link} to='/about'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/contact'>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to='/education'>
            Login
          </Nav.Link>
          <Nav.Link as={Link} to='/projects'>
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to='/home'>
            Skills
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
