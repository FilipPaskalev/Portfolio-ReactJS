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
        <a
          key={index}
          href={icon.link}
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title={icon.text}
          className='social-icon'
          target={icon.target}>
          <i className={icon.icon}></i>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
