import React from "react";

// Components
import Hero from "./Hero/Hero";
import Message from "./Message/Message";
import Team from "./Team/Team";
import Locations from "./Locations/Locations";


function About (props) {
  return (
    <div>
      <Hero/>
      <Message/>
      <Team/>
      <Locations/>
    </div>
  );
}

export default About