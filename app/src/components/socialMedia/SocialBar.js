import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookF, faInstagram, faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  font-size: .5em;
  color: white;
  width: 95vw;
  display: flex;
  justify-content: space-between;

  @media(min-width: 768px){
    width: 25vw;
  }
`

const LinkTo = styled.a`
  text-decoration: none;
  color: white;
`
const SocialBar = ({socialMedia}) => {
  return (
    <Container>
      {socialMedia.instagram ? (
        <LinkTo href={socialMedia.instagram} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </LinkTo>
      ) : null}
      {socialMedia.facebook ? (
        <LinkTo href={socialMedia.facebook} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </LinkTo>
      ) : null}
      {socialMedia.twitter ? (
        <LinkTo href={socialMedia.twitter} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </LinkTo>
      ) : null}
      {socialMedia.email ? (
        <LinkTo href={socialMedia.email} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </LinkTo>
      ) : null}
      {socialMedia.apple ? (
        <LinkTo href={socialMedia.apple} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faApple} />
        </LinkTo>
      ) : null}
      {socialMedia.spotify ? (
        <LinkTo href={socialMedia.spotify} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSpotify} />
        </LinkTo>
      ) : null}
    </Container>
  ); 
}

export default SocialBar