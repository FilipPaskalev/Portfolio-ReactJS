// Utils
import userInfo from '../../../data/userInfo.json';
import TypeUserInfo from '../../../types/TypeUserInfo';
// Styles
import './footer.css';

const Footer = () => {
  const { linkedIn, facebook, twitter, github } = userInfo as TypeUserInfo;

  return (
    <footer className='social-icons'>
      <a className='social-icon' href={linkedIn} target='_blank'>
        <i className='fab fa-linkedin-in'></i>
      </a>
      <a className='social-icon' href={github} target='_blank'>
        <i className='fab fa-github'></i>
      </a>
      <a className='social-icon' href={twitter} target='_blank'>
        <i className='fab fa-twitter'></i>
      </a>
      <a className='social-icon' href={facebook} target='_blank'>
        <i className='fab fa-facebook-f'></i>
      </a>
    </footer>
  );
};

export default Footer;
