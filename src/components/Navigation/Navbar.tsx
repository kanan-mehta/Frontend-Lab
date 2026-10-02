import { NavLink } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import "./Navbar.css";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="frontend-lab-menu">
      <ul className={`menu-list ${isMenuOpen ? "menu-list--open" : ""}`}>
        <li className="menu-list-item">
          <NavLink to="/" className="menu-link" onClick={handleNavClick}>
            Home
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink to="/about" className="menu-link" onClick={handleNavClick}>
            About Me
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink
            to="/frontend-mentor"
            className="menu-link"
            onClick={handleNavClick}
          >
            Frontend Mentor Challenges
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink
            to="/react-challenges"
            className="menu-link"
            onClick={handleNavClick}
          >
            React Challenges
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink
            to="/js-ts-kata"
            className="menu-link"
            onClick={handleNavClick}
          >
            Javascript/Typescript Kata
          </NavLink>
        </li>
        <li className="menu-list-item">
          <NavLink
            to="/personal-projects"
            className="menu-link"
            onClick={handleNavClick}
          >
            Personal Project
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
