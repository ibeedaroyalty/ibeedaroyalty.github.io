import React from "react";
import Nav from "../Navigation/Nav";
import Bio from "./Bio";
import HeroArea from "../Artist/HeroArea";
import Marquee from "../Artist/Marquee";
import { ArtistStyles } from "./styles";
import Albums from "../Music/Albums";


const Artist = ({ artist, showMenu, setShowMenu }) => {
  return (
    <ArtistStyles.Container
      desktop={artist.photos.desktop}
      mobile={artist.photos.mobile}
    >
      <Nav showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroArea
        name={artist.name}
        desktopImg={artist.photos.desktop}
        mobileImg={artist.photos.mobile}
        font={artist.fonts.header}
        colors={artist.colors}
        socialMedia={artist.socialMedia}
      />
      <Marquee message={artist.message} />
      <Bio bio={artist.bio} />
      {artist.photos.background ? <Albums artist={artist} /> : null}
    </ArtistStyles.Container>
  );
};

export default Artist;
