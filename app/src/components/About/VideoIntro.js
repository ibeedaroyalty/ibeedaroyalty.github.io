import React from "react";
import Opening from "../../assets/opening1.mp4";
import { VideoStyles } from "./styles";


function VideoIntro() {
  return (
    <VideoStyles.Container>
      <VideoStyles.Video autoPlay muted loop>
        <source src={Opening} type="video/mp4" />
      </VideoStyles.Video>
    </VideoStyles.Container>
  );
}

export default VideoIntro;
