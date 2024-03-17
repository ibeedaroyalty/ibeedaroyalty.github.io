import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookF, faInstagram, faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
    font-size: 300%;
    color: white;
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const LinkTo = styled.a`
  text-decoration: none;
  color: white;
`

function SocialMediaBar (props) {
    return (
        <Container>
            
            <LinkTo href={"#"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </LinkTo>

            <LinkTo href={"#"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
            </LinkTo>
        
        
            <LinkTo href={"#"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </LinkTo>
        
        
            <LinkTo href={"#"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
            </LinkTo>
        
            <LinkTo href={"#"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faApple} />
            </LinkTo>
        
            <LinkTo href={"#"} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSpotify} />
            </LinkTo>
            
        </Container>
    );
}

export default SocialMediaBar;