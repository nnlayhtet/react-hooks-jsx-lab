import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
              <h2>About Me</h2>
              <p>Freelancers and entrepreneurs use about.me to grow their audience and get more clients.</p>
              <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
