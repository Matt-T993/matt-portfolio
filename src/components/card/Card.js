import React from "react";
import "./card.css";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="image-container">
          <img src={imgUrl} alt="project" />
        </div>
        <div className="card-heading">
          <h3>{heading}</h3>
        </div>
        <div className="card-para">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
