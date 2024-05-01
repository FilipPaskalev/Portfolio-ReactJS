import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./nav-bar-styles.scss";
import EPagePaths from "../../enum/EPagePaths";

const BRAND_NAME = "</>";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to={EPagePaths.HOME}
          onClick={() => setIsMenuOpen(false)}
        >
          {BRAND_NAME}
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={menuRef}
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={EPagePaths.HOME}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={EPagePaths.ABOUT_THIS_PROJECT}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
