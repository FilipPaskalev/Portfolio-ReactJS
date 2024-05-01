import "./home-page.scss";
import NavBar from "../../components/navBar/NavBar";
import AVATAR from "../../assets/avatar/avatar.png";

type SocialLinks = {
  [key: string]: string;
};

const FIRST_NAME: string = "Filip";
const LAST_NAME: string = "Paskalev";
const EMAIL: string = "paskalevfilip@gmail.com";
const PHONE: string = "(44) 7882 XXX XXX";
const LOCATION: string = "United Kingdom · Birmingham";
const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
};
const DESCRIPTION: string =
  "Welcome to my portfolio! I'm passionate about web development and design. Here, you'll find a collection of my projects ranging from simple websites to complex web applications. I enjoy creating intuitive and user-friendly interfaces, and I'm constantly learning and exploring new technologies to improve my skills. Take a look around and feel free to contact me if you have any questions or project inquiries!";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="resume-section">
        <div className="resume-section-content">
          <div className="avatar">
            <img src={AVATAR} alt="..." />
          </div>
          <div className="personal-info">
            <h1 className="mb-0">
              {FIRST_NAME}
              <span className="text-primary">{LAST_NAME}</span>
            </h1>
            <div className="location">{LOCATION}</div>
            <div className="contact-info">
              {PHONE} · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <p className="lead">{DESCRIPTION}</p>
          </div>
        </div>
      </section>
      <footer className="social-footer">
        <div className="social-icons">
          <a className="social-icon" href={SOCIAL_LINKS.linkedin}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href={SOCIAL_LINKS.github}>
            <i className="fab fa-github"></i>
          </a>
          <a className="social-icon" href={SOCIAL_LINKS.twitter}>
            <i className="fab fa-twitter"></i>
          </a>
          <a className="social-icon" href={SOCIAL_LINKS.facebook}>
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </>
  );
};

export default HomePage;
