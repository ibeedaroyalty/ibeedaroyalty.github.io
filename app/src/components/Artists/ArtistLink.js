import React from "react";
import { Link } from "react-router-dom";
import { ArtistLinkStyles } from "./styles";

const ArtistIcon = (props) => {
  return (
      <Link to={`${props.artist.linkTo}`} style={{textDecoration: 'none'}}>
        <ArtistLinkStyles.Container desktop={props.artist.photos.desktop} mobile={props.artist.photos.mobile}>

        <ArtistLinkStyles.Name font={props.artist.fonts.header} color={props.artist.colors.main} shadow={props.artist.colors.shadow}>{props.artist.name}</ArtistLinkStyles.Name>
        </ArtistLinkStyles.Container>
      </Link>
  );
}

export default ArtistIcon