import { useState } from "react";
import NavLinks from "./NavLinks";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FiMenu
      className="hamburger"
      size="2.5rem"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className="hamburger"
      size="2.5rem"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
