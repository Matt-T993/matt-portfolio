import React from "react";
import data from "../../data";
import "./footer.css";

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <h1 className="header">Contact</h1>

          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-icon"
                  src={socialLink.img}
                  alt="icons"
                ></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
