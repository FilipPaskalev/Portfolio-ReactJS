// Hooks
import { useState, useEffect } from "react";

// React Bootstrap
import { Navbar, Image } from "react-bootstrap";

// Resources
import userData from "../../data/userProfileData.json";
import avatarURL from "./assets/avatar.jpg";

// CSS styles
import "./style.css";

// Types
type UserNameProps = {
  firstName: string;
  lastName: string;
  nickName: string;
};

type NavBarBrandProps = {
  windowWidth: number;
};

// Component
const NavBarBrand = (props: NavBarBrandProps) => {
  const { firstName, lastName, nickName }: UserNameProps = userData;
  const [name, setName] = useState(`${nickName}`);

  useEffect(() => {
    if (props.windowWidth > 768) {
      setName(`${firstName} ${lastName}`);
    } else {
      setName(`${nickName}`);
    }
  }, [firstName, lastName, nickName, props.windowWidth]);

  return (
    <Navbar.Brand href="/" className="brand-container">
      <Image
        alt="Avatar"
        src={avatarURL}
        width={35}
        height={35}
        roundedCircle
      />
      <h1 className="brand-name">{name}</h1>
    </Navbar.Brand>
  );
};

export default NavBarBrand;
