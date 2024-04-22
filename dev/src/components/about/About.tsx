// Global styles
import '../../../global-styles.css';
// Component styles
import './about.css';
// Data
import userInfo from '../../data/userInfo.json';
// Types
import TypeUserInfo from '../../types/TypeUserInfo';

const About = () => {
  const {
    firstName,
    lastName,
    nickName,
    email,
    phoneNumber,
    city,
    country,
    linkedIn,
    facebook,
    twitter,
    github,
  } = userInfo as TypeUserInfo;
  const formattedPhoneNumber: string = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 7)} ${phoneNumber.slice(7, 13)}`;

  // TODO change name to nickname in <h1> when screen is small
  return (
    <section className='resume-section' id='about'>
      <div className='resume-section-content'>
        <h1 className='mb-0'>
          {firstName}
          <span className='text-primary'>{lastName}</span>
        </h1>
        <div className='subheading mb-5'>
          {city} · {country} · <a href={`tel:${phoneNumber}`}>{formattedPhoneNumber}</a> ·{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <p className='lead mb-5'>
          I am experienced in leveraging agile frameworks to provide a robust synopsis for high
          level overviews. Iterative approaches to corporate strategy foster collaborative thinking
          to further the overall value proposition.
        </p>
        {/* // TODO remove all underline style from icons */}
        <div className='social-icons'>
          <a className='social-icon' href={linkedIn} target='_blank'>
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a className='social-icon' href={github} target='_blank'>
            <i className='fab fa-github'></i>
          </a>
          {/* // TODO add active Twitter link */}
          <a className='social-icon' href={twitter} target='_blank'>
            <i className='fab fa-twitter'></i>
          </a>
          {/* // TODO add active FB link */}
          <a className='social-icon' href={facebook} target='_blank'>
            <i className='fab fa-facebook-f'></i>
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
