import EGridBreakpoints from "../../enum/EGridBreakpoints";
import useScreenSize from "../../hooks/useScreenSize";
import HamburgerNav from "./hamburgerNav/HamburgerNav";
import HorizontalNav from "./horizontalNav/HorizontalNav";
import "./navigation-styles.scss";
import SideNav from "./sideNav/SideNav";

type Props = {
  message?: string[];
};

const Navigation = ({ message }: Props) => {
  const screenWidth = useScreenSize().width;

  if (screenWidth < EGridBreakpoints.MD)
    return <HamburgerNav message={message} />;

  if (screenWidth < EGridBreakpoints.XL)
    return <HorizontalNav message={message} />;

  return <SideNav />;
};

export default Navigation;
