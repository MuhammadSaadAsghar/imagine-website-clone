import {React, useState } from "react";
import "./Reviews.css";
import testmonial from "../../logo/team2.jpg";
import computer from "../../logo/computer.jpg";

const   Reviews = () => {

  const data = [
  {
    id: 1,
    name: "Rao Saad",
    img: testmonial,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo."
  },
  {
    id: 2,
    name: "Ali Khan",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description:
      "Amazing experience! The service quality was outstanding and exceeded expectations."
  },
  {
    id: 3,
    name: "Ayesha Malik",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description:
      "Very professional and friendly team. I would definitely recommend them to others."
  },
  {
    id: 4,
    name: "Usman Tariq",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    description:
      "The project was delivered on time and the design was exactly what I wanted."
  },
  {
    id: 5,
    name: "Sara Ahmed",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    description:
      "Excellent communication and great attention to detail. Totally satisfied!"
  }
];

    const [index, setIndex] = useState(0);

  // next button
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  // previous button
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };



  return (
    <div className="Reviews">
      <div className="Team-heading">
        <div className="Team-h1 Reviews-h1">
          <h1>Testmonials</h1>
        </div>
      </div>


      <div className="Testmonials">
        
    {data.map((item, i) => 
          i === index && (
            <div key={item.id} className="Testmonials-content">
              <figure className="Testmonials-img">
                <img src={item.img} alt={item.name} />
              </figure>
              <blockquote className="Testmonials-p1">
                <p>{item.description}</p>
              </blockquote>
              <p className="Testmonials-nam">
                <strong>{item.name}</strong>
              </p>
            </div>
          )
        )}


        <div className="Testmonials-button">
          <button type="button">
            <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
          </button>
          <button type="button">
            {" "}
            <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>{" "}
          </button>
        </div>
        <div className="slider">
          {data.map((_,i)=>(
          <button key={i} className={`dots ${index===i ? "active" :""}`} type="button" onClick={() =>setIndex(i)}>
            <span></span>
          </button>
       
        ))}
        </div>
      </div>
  
    </div>
  );
};

export default Reviews;
