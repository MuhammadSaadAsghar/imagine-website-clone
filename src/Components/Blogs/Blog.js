import React from "react";
import "./Blog.css";
import blog from "../../logo/computer.jpg";

const Blog = () => {
  return (
    <div className="Blog">
      <div className="Team-heading">
        <div className="Team-h1 Reviews-h1">
          <h1>Blog Posts</h1>
        </div>
      </div>

      <div className="Blog-cards">
        <div className="Blog-card">
          <img src={blog} alt="" />
          <h2 className="blog-h2">Make Your Business More Profitable</h2>
          <div className="blog-info mb-4">
            {" "}
            Ham Brook <span className="mx-2">.</span>jan 18, 2026{" "}
            <span className="mx-2">.</span> <a href="/">News</a>
          </div>
          <p className="blog-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <p className="blog-p2"><a href="">Continue Reading...</a></p>
        </div>
        <div className="Blog-card">
          <img src={blog} alt="" />
          <h2 className="blog-h2">Make Your Business More Profitable</h2>
          <div className="blog-info mb-4">
            {" "}
            Ham Brook <span className="mx-2">.</span>jan 18, 2026{" "}
            <span className="mx-2">.</span> <a href="/">News</a>
          </div>
          <p className="blog-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <p className="blog-p2"><a href="">Continue Reading...</a></p>
        </div>
        <div className="Blog-card">
          <img src={blog} alt="" />
          <h2 className="blog-h2">Make Your Business More Profitable</h2>
          <div className="blog-info mb-4">
            {" "}
            Ham Brook <span className="mx-2">.</span>jan 18, 2026{" "}
            <span className="mx-2">.</span> <a href="/">News</a>
          </div>
          <p className="blog-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <p className="blog-p2"><a href="/">Continue Reading...</a></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
