import { NavLink } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>
        I am a Junior Web Developer + Cloud Engineer with a Bachelor’s in
        Computer Science.
      </h2>
      <div className="buttons-container">
        <NavLink className="button" to="/">
          Homepage
        </NavLink>
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

export default About;
