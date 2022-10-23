import React from "react";

// Components
import Definition from "./Definition";
import Nav from "../Navigation/Nav";
import VideoIntro from "./VideoIntro";
import {HomeStyles} from './styles'


function Home (props) {
  return (
    <HomeStyles.Container>
      <Nav showMenu={props.showMenu} setShowMenu={props.setShowMenu}/>
      <VideoIntro/>
      <Definition/>
    </HomeStyles.Container>
  );
}

export default Home