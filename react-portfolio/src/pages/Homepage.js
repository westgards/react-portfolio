import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1>Nicole Westgard</h1>
        <img src="nw-avatar.png" alt="It's a me!"></img>
      </div>
      <div className="brand-statement">
        <h2>Welcome to my Portfolio</h2>
        <p>I have been creating</p>
      </div>
      <div className="buttons-container">
        <NavLink className="button" to="projects">
          My projects
        </NavLink>
        <NavLink className="button" to="contact">
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

export default Homepage;
