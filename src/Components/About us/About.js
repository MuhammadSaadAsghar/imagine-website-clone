import React from "react";
import "./About.css";
import about from "../../logo/about.svg";

const About = () => {
  return (
    <div className="About">
      <div className="About-heading">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <div className="about-img">
          <img src={about} alt="" />
        </div>
        <div className="about-mission">
          <div className="about-h1">
            <h3>Our Mission</h3>
          </div>
          <div className="about-p">
            <p>
              {" "}
              Eos cumque optio dolores excepturi rerum temporibus magni
              recusandae eveniet, totam omnis consectetur maxime quibusdam
              expedita dolorem dolor nobis dicta labore quaerat esse magnam
              unde, aperiam delectus! At maiores, itaque.
            </p>
          </div>

          <ul className="about-list">
            <li>Laborum enim quasi at modi</li>
            <li>Ad at tempore</li>
            <li>Labore quaerat esse</li>
          </ul>
          <p className="about-button">
           <a className="btn btn-primary" href="/">Learn More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
