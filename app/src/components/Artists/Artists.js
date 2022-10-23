import React from "react";

import Nav from "../Navigation/Nav";
import ArtistIcon from "./ArtistLink";
import { ArtistsStyles } from "./styles";

const Artists = ({artists, showMenu, setShowMenu}) => {

  return (
    <ArtistsStyles.Container>
      <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
      <ArtistsStyles.SubContainer>
        {artists.map((artist) => (
          <ArtistIcon artist={artist} />
        ))}
      </ArtistsStyles.SubContainer>
    </ArtistsStyles.Container>
  );

};

export default Artists;
