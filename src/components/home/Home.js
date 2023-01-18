import React from "react";
import "./home.css";
import data from "../../data";

const Home = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="intro-wrapper">
          <h2 className="name">Hi My name is </h2>
          <h1 className="title">{data.name}</h1>
          <h1 className="title">I'm a {data.title}</h1>
          <img
            className="self-img"
            src="assets/personIcon.png"
            alt="self-img"
          />
          <a
            href={`mailto:${
              data.contactEmail
                ? data.contactEmail
                : "matthew.theseira@gmail.com"
            }`}
            className="primary-btn"
          >
            Connect With Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* // <section id="home">
    //   <div className="home">
    //     <div className="container">
    //       <div className="intro-wrapper">
    //         <img className="self-img" src="assets/matt.jpg" alt="self-img" />
    //         <h2 className="home-intro">Hello, My Name is,</h2>
    //         <h1 className="home-name"> I'm Matthew Theseira</h1>
    //         <h2 className="home-word">FrontEnd Developer </h2>
    //       </div>
    //     </div>
    //   </div>
    // </section> */
