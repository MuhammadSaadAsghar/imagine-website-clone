import React from "react";
import "./Feedback.css";
import Feedback1 from "../../logo/Feedback.svg";
import Feedback2 from "../../logo/Feedback2.svg";
import team from "../../logo/team2.jpg";

const Feedback = () => {
  return (
    <div className="Feedback">
      <div className="Feedback-content">
        <div className="Feedback-image">
          <img className="feed-image" src={Feedback1} alt="" />
        </div>
        <div className="Feedback-text">
          <div className="feed-h1">
            <h1>Communicate and gather feedback</h1>
          </div>
          <div className="feed-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem neque nisi architecto autem molestias corrupti officia
              veniam.
            </p>
          </div>
          <div className="Feedback-card">
            <div className="card-content">
              <div className="feed-img">
                <img src={team} alt="saad" />
              </div>
              <div className="card-heading">
                <strong>Rao Saad</strong> <br /> Co-Founder,XYZ Inc
              </div>
            </div>
            <div className="card-p">
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="Feedback-content">
        <div className="Feedback-text">
          <div className="feed-h1">
            <h1>Communicate and gather feedback</h1>
          </div>
          <div className="feed-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem neque nisi architecto autem molestias corrupti officia
              veniam.
            </p>
          </div>
          <div className="Feedback-card">
            <div className="card-content">
              <div className="feed-img">
                <img src={team} alt="saad" />
              </div>
              <div className="card-heading">
                <strong>Rao Saad</strong> <br /> Co-Founder,XYZ Inc
              </div>
            </div>
            <div className="card-p">
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="Feedback-image">
          <img className="feed-image" src={Feedback2} alt="" />
        </div>
      </div>
      <div className="Feedback-content">
        <div className="Feedback-image">
          <img className="feed-image" src={Feedback1} alt="" />
        </div>
        <div className="Feedback-text">
          <div className="feed-h1">
            <h1>Communicate and gather feedback</h1>
          </div>
          <div className="feed-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem neque nisi architecto autem molestias corrupti officia
              veniam.
            </p>
          </div>
          <div className="Feedback-card">
            <div className="card-content">
              <div className="feed-img">
                <img src={team} alt="saad" />
              </div>
              <div className="card-heading">
                <strong>Rao Saad</strong> <br /> Co-Founder,XYZ Inc
              </div>
            </div>
            <div className="card-p">
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="Feedback-content">
        <div className="Feedback-text">
          <div className="feed-h1">
            <h1>Communicate and gather feedback</h1>
          </div>
          <div className="feed-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem neque nisi architecto autem molestias corrupti officia
              veniam.
            </p>
          </div>
          <div className="Feedback-card">
            <div className="card-content">
              <div className="feed-img">
                <img src={team} alt="saad" />
              </div>
              <div className="card-heading">
                <strong>Rao Saad</strong> <br /> Co-Founder,XYZ Inc
              </div>
            </div>
            <div className="card-p">
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus vitae ipsa asperiores inventore aperiam iure?”
              </blockquote>
            </div>
          </div>
        </div>
        <div className="Feedback-image">
          <img className="feed-image" src={Feedback2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
