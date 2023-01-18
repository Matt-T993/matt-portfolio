import React from "react";
import data from "../../data";

import "./skills.css";

const Skills = () => {
  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          <h1>Skills</h1>
          <h2 className="skill-title">Front-End</h2>

          <div className="skills">
            {data.fSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <img className="skill-img" src={skill.img} alt="logo"></img>
                <p className="logo-name">{skill.text}</p>
              </div>
            ))}
          </div>

          <h2 className="skill-title">Back-End</h2>
          <div className="skills">
            {data.bSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <img className="skill-img" src={skill.img} alt="logo"></img>
                <p className="logo-name">{skill.text}</p>
              </div>
            ))}
          </div>
          <h2 className="skill-title">Other</h2>
          <div className="skills">
            {data.otherSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <img className="skill-img" src={skill.img} alt="logo"></img>
                <p className="logo-name">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
