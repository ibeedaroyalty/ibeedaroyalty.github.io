import React from "react";

// Components
import Definition from "./Definition";
import Nav from "../Navigation/Nav";
import VideoIntro from "./VideoIntro";
import {HomeStyles} from './styles'


function About (props) {
  return (
    <HomeStyles.Container>
      Hello From About
      <div>I am Hero</div>
      <div>I am Message</div>
      <div>I am Team</div>
      <div>I am Locations</div>
    </HomeStyles.Container>
  );
}

export default About