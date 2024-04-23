// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// Styles
import '../../../global-styles.css';
import './about.css';
// Utils
import userInfo from '../../data/userInfo.json';
import TypeUserInfo from '../../types/TypeUserInfo';

const About = () => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    city,
    country,
    linkedIn,
    facebook,
    twitter,
    github,
  } = userInfo as TypeUserInfo;
  const formattedPhoneNumber: string = `+44 ${phoneNumber.slice(3, 7)} ${phoneNumber.slice(7, 13)}`;

  return (
    <section className='resume-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='resume-section-content'>
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
              level overviews. Iterative approaches to corporate strategy foster collaborative
              thinking to further the overall value proposition.
            </p>
            <div className='social-icons'>
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
