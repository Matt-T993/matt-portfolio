import React from "react";
import "./header.css";
const Header = (props) => {
  return (
    <div className="header-container">
      <hr className="line" />
      <h1 className="title">{props.title}</h1>
    </div>
  );
};

export default Header;
