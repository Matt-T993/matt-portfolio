import React from "react";
import data from "../../data";
import "./project.css";
import Card from "../card/Card";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="work-wrapper">
          <h1>Projects</h1>
          <div className="grid">
            {data.projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                imgUrl={project.imageSrc}
                paragraph={project.para}
                projectLink={project.url}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
