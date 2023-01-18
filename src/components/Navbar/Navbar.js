import React from "react";
import MobileNavigation from "./MobileNavigation";
import "./navbar.css";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="navbar">
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Navbar;
