// Styles
import './header.css';

interface IHeaderProps {
  firstName: string;
  lastName: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <h1 className='mb-0'>
      {props.firstName}
      <span className='text-primary'>{props.lastName}</span>
    </h1>
  );
};

export default Header;
