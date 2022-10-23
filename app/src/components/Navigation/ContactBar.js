import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  font-size: 2em;
  color: white;
  width: 98%;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  color: black;
  align-self: flex-end;
`;
const ContactBar = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faTiktok} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faEnvelope} />
    </Container>
  );
};

export default ContactBar;
