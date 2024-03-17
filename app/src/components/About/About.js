import React from "react";

// Components
import Definition from "./Definition";
import Nav from "../Navigation/Nav";
import VideoIntro from "./Hero/VideoIntro";
import {HomeStyles} from './styles'
import Hero from "./Hero/Hero";
import Message from "./Message/Message";
import Team from "./Team/Team";
import Locations from "./Locations/Locations";


function About (props) {
  return (
    <HomeStyles.Container>
      Hello From About
      <Hero/>
      <Message/>
      <Team/>
      <Locations/>
    </HomeStyles.Container>
  );
}

export default About