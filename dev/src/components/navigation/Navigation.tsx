import { useState } from 'react';
// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
import '../../../global-styles.css';
import './navigation.css';
// Utils
import userInfo from '../../data/userInfo.json';
import avatar from '../../assets/avatar.png';
import TypeUserInfo from '../../types/TypeUserInfo';
import EnumBootstrapBreakpoints from '../../enums/EnumBootstrapBreakpoints';

const Navigation = () => {
  const { firstName, lastName } = userInfo as TypeUserInfo;
  const [expanded, setExpanded] = useState(false);
  const isSmallerThanLG = window.innerWidth < EnumBootstrapBreakpoints.LG;

  const renderAvatar = isSmallerThanLG && (
    <img
      className='img-fluid img-profile rounded-circle mx-auto mb-2 border border-primary top-nav-avatar-img'
      src={avatar}
      alt='profile avatar'
    />
  );

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand='md'
      bg='primary'
      variant='dark'
      fixed='top'
      id='sideNav'
      expanded={expanded}
      onToggle={handleNavbarToggle}>
      <Navbar.Brand>
        <a href='#' onClick={handleLinkClick} className='d-block d-lg-none nav-link'>
          {renderAvatar}
          {firstName} {lastName}
        </a>
        <a href='#' onClick={handleLinkClick} className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={avatar}
            alt='profile avatar'
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbarResponsive' />
      <Navbar.Collapse id='navbarResponsive'>
        <Nav className='navbar-nav ms-auto'>
          <Nav.Link href='#about' onClick={handleLinkClick} className='nav-link'>
            About
          </Nav.Link>
          <Nav.Link href='#experience' onClick={handleLinkClick} className='nav-link'>
            Experience
          </Nav.Link>
          <Nav.Link href='#education' onClick={handleLinkClick} className='nav-link'>
            Education
          </Nav.Link>
          <Nav.Link href='#skills' onClick={handleLinkClick} className='nav-link'>
            Skills
          </Nav.Link>
          <Nav.Link href='#interests' onClick={handleLinkClick} className='nav-link'>
            Interests
          </Nav.Link>
          <Nav.Link href='#awards' onClick={handleLinkClick} className='nav-link'>
            Awards
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
