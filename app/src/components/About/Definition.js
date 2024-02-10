import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DefinitionStyles } from "./styles";

const Definition = () => {
  return (
    <DefinitionStyles.MainContainer>
      <DefinitionStyles.SubContainer>
        <DefinitionStyles.Title>IBêêDaRoyalty</DefinitionStyles.Title>
        <DefinitionStyles.Key>
          [ ī ]-[ bē ]-[ dŭ ]-[ ˈrȯi(-ə)l-tē ];
        </DefinitionStyles.Key>
        <DefinitionStyles.Label>Origin</DefinitionStyles.Label>
        <DefinitionStyles.Text>
          Founded with and in honor of{" "}
          <DefinitionStyles.Queen
            href="https://www.9news.com/article/news/local/queen-ashbys-mom-reflects-on-daugthers-life/73-533842732"
            target="_blank"
          >
            Queen T Ashby
          </DefinitionStyles.Queen>
          <FontAwesomeIcon icon={faUpRightFromSquare} /> whos only
          goal was to show the world: be as great as you can be and treat
          yourself like royalty.
        </DefinitionStyles.Text>
        <DefinitionStyles.Label>Noun</DefinitionStyles.Label>
        <DefinitionStyles.ListText>
          <li>A whole vibe</li>
          <li>A higher Vibration</li>
        </DefinitionStyles.ListText>
        <DefinitionStyles.Label>Verb</DefinitionStyles.Label>
        <DefinitionStyles.ListText>
          <li>To be a King or Queen</li>
          <li>To maintain a higher vibration</li>
          <li>To summon the energy to live, love and be great</li>
        </DefinitionStyles.ListText>
      </DefinitionStyles.SubContainer>
    </DefinitionStyles.MainContainer>
  );
};

export default Definition;
