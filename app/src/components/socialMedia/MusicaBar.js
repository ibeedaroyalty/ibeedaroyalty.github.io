import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmazon,
  faApple,
  faSoundcloud,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  font-size: 2em;
  color: white;
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

const LinkTo = styled.a`
  text-decoration: none;
  color: white;
`;
const MusicBar = ({activeAlbum}) => {
  return (
    <Container>
      {activeAlbum.links.apple ? (
        <LinkTo href={activeAlbum.links.apple} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faApple} />
        </LinkTo>
      ) : null}
      {activeAlbum.links.spotify ? (
        <LinkTo href={activeAlbum.links.spotify} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSpotify} />
        </LinkTo>
      ) : null}
      {activeAlbum.links.youtube ? (
        <LinkTo href={activeAlbum.links.youtube} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </LinkTo>
      ) : null}

      {activeAlbum.links.amazon ? (
        <LinkTo href={activeAlbum.links.amazon} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faAmazon} />
        </LinkTo>
      ) : null}
      {activeAlbum.links.soundcloud ? (
        <LinkTo href={activeAlbum.links.soundcloud} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSoundcloud} />
        </LinkTo>
      ) : null}
    </Container>
  );
};

export default MusicBar;
