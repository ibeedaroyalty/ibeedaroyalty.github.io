import React from "react";
import { SongStyles } from "./styles";

const Song = ({song}) => {

  return (
    <SongStyles.SongTitle>
      {song.name}
    </SongStyles.SongTitle>
  );
}

export default Song