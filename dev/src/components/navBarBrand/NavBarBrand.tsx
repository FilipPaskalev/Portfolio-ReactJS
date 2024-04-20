// Hooks
import { useState, useEffect } from 'react';

// React Bootstrap
import { Navbar, Image } from 'react-bootstrap';

// Resources
import userData from '../../data/userProfileData.json';
import avatarURL from './assets/avatar.jpg';

// CSS styles
import './style.css';

// Types
type UserNameProps = {
  firstName: string;
  lastName: string;
  nickName: string;
};

type NavBarBrandProps = {
  windowWidth: number;
};

enum EnumMobileBreakpointsPX {
  ExtraSmall = 575,
  Small = 576,
  Medium = 768,
  Large = 992,
  XLarge = 1200,
  XXLarge = 1400,
}

// Component
const NavBarBrand = (props: NavBarBrandProps) => {
  const { firstName, lastName, nickName }: UserNameProps = userData;
  const [name, setName] = useState(`${nickName}`);
  const [avatarSize, setAvatarSize] = useState(35);

  useEffect(() => {
    switch (true) {
      case props.windowWidth <= EnumMobileBreakpointsPX.ExtraSmall:
        setName(`${nickName}`);
        setAvatarSize(35);
        break;
      case props.windowWidth <= EnumMobileBreakpointsPX.Medium:
        setName(`${firstName} ${lastName}`);
        setAvatarSize(40);
        break;
      case props.windowWidth <= EnumMobileBreakpointsPX.Large:
        setName(`${firstName} ${lastName}`);
        setAvatarSize(45);
        break;
      case props.windowWidth <= EnumMobileBreakpointsPX.XLarge:
        setName(`${firstName} ${lastName}`);
        setAvatarSize(50);
        break;
      case props.windowWidth <= EnumMobileBreakpointsPX.XXLarge:
        setName(`${firstName} ${lastName}`);
        setAvatarSize(55);
        break;
      default:
        setName(`${firstName} ${lastName}`);
        setAvatarSize(60);
        break;
    }
  }, [props.windowWidth, nickName, firstName, lastName]);

  return (
    <Navbar.Brand href='/' className='d-inline-flex p-2'>
      <Image alt='Avatar' src={avatarURL} width={avatarSize} height={avatarSize} roundedCircle />
      <h1 className='mb-0'>{name}</h1>
    </Navbar.Brand>
  );
};

export default NavBarBrand;
