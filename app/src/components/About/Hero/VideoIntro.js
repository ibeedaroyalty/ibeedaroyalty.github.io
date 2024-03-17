import React from "react";
import Opening from "../../../assets/opening1.mp4";
import { HeroStyles } from "../styles";


function VideoIntro() {
  return (
    <HeroStyles.VideoContainer>
      <HeroStyles.Video autoPlay muted loop>
        <source src={Opening} type="video/mp4" />
      </HeroStyles.Video>
    </HeroStyles.VideoContainer>
  );
}

export default VideoIntro;
