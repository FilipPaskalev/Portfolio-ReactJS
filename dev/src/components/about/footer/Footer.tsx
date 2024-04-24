// Styles
import './footer.css';

type TIcons = {
  text: string;
  link: string;
  icon: string;
  target: string;
};

interface IFooterProps {
  icons: TIcons[];
}

const Footer = (props: IFooterProps) => {
  return (
    <footer className='social-icons'>
      {props.icons.map((icon, index) => (
        <a className='social-icon' href={icon.link} target={icon.target} key={index}>
          <i className={icon.icon}></i>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
