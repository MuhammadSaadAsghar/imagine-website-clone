import React from "react";
import "./Reviews.css";
import testmonial from "../../logo/team2.jpg";

const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="Team-heading">
        <div className="Team-h1 Reviews-h1">
          <h1>Testmonials</h1>
        </div>
      </div>

      <div className="Testmonials">
        <div className="Testmonials-content">
          <figure className="Testmonials-img">
            <img src={testmonial} alt="" />
          </figure>
          <blockquote className="Testmonials-p1">
            <p>
              {" "}
              “Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
              explicabo animi minima fuga beatae illum eligendi incidunt
              consequatur. Amet dolores excepturi earum unde iusto.”
            </p>
          </blockquote>
          <p className="Testmonials-nam">
            <strong>Rao Saad</strong>
          </p>
        </div>
        <div className="Testmonials-button">
          <button type="button">
            {" "}
            <i className="fa-solid fa-chevron-left"></i>{" "}
          </button>
          <button type="button">
            {" "}
            <i className="fa-solid fa-chevron-right"></i>{" "}
          </button>
        </div>
        <div className="slider">
          <button className="dots" type="button">
            <span></span>
          </button>
          <button className="dots" type="button">
            <span></span>
          </button>
          <button className="dots" type="button">
            <span></span>
          </button>
          <button className="dots" type="button">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
