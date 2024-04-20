import '../../../styles.css';
import '../../data/contact.json';
import avatar from '../../assets/avatar.png';

type ContactTypes = {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  linkedIn: string;
  facebook: string;
  twitter: string;
  github: string;
};

const Navigation = () => {
  const contact: ContactTypes = {
    firstName: 'Filip',
    lastName: 'Paskalev',
    nickName: 'Phil',
    email: 'paskalevfilip@gmail.com',
    phoneNumber: '+44 7882 146 424',
    city: 'Birmingham',
    country: 'UK',
    linkedIn: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top' id='sideNav'>
      <a className='navbar-brand js-scroll-trigger' href='#page-top'>
        <span className='d-block d-lg-none'>
          {contact.firstName} {contact.lastName}
        </span>
        <span className='d-none d-lg-block'>
          <img className='img-fluid img-profile rounded-circle mx-auto mb-2' src={avatar} alt='profile avatar' />
        </span>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarResponsive'
        aria-controls='navbarResponsive'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#experience'>
              Experience
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#education'>
              Education
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#skills'>
              Skills
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#interests'>
              Interests
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link js-scroll-trigger' href='#awards'>
              Awards
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
