import React from "react";
// import { a } from "react-router-dom";

const Navbar=()=> {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary py-3">
      <div className="container-fluid ">
        <a className="navbar-brand d-flex align-items-center  my-2" href="/">
          
      <h2 style={{fontWeight:"normal", marginLeft:"100px"}}>  imagine </h2>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse "  id="navbarTogglerDemo03">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0  gap-4"style={{marginright:"50px"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Features</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" role=" button" aria-expanded="false">
            About Us
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">More Free Templates</a></li>
            <li><a className="dropdown-item" href="#">OurTeam</a></li>
           <li className="dropdown-submenu">
  <a className="dropdown-item " href="#more">More Links ▸ </a>
       
  <ul className="dropdown-menu submenu-right">
    <li><a className="dropdown-item" href="#link1">Menu one</a></li>
    <li><a className="dropdown-item" href="#link2">Menu Two</a></li>
    <li><a className="dropdown-item" href="#link3">Menu Three</a></li>
  </ul>
            </li>
            </ul>
            </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Testimonials</a>  </li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Blog</a></li>
        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Contact</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;