import React from "react";
import "./navbar.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-list">
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="nav-links"
      >
        <a href="#about">About</a>
      </li>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="nav-links"
      >
        <a href="#skills">Skill</a>
      </li>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="nav-links"
      >
        <a href="#projects">Projects</a>
      </li>
      <li
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="nav-links"
      >
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
