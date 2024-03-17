import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { MessageStyles } from "../styles";

const Definition = () => {
  return (
    <MessageStyles.MainContainer>
      <MessageStyles.SubContainer>
        <MessageStyles.Title>IBêêDaRoyalty</MessageStyles.Title>
        <MessageStyles.Key>
          [ ī ]-[ bē ]-[ dŭ ]-[ ˈrȯi(-ə)l-tē ];
        </MessageStyles.Key>
        <MessageStyles.Label>Origin</MessageStyles.Label>
        <MessageStyles.Text>
          Founded with and in honor of{" "}
          <MessageStyles.Queen
            href="https://www.9news.com/article/news/local/queen-ashbys-mom-reflects-on-daugthers-life/73-533842732"
            target="_blank"
          >
            Queen T Ashby
          </MessageStyles.Queen>
          <FontAwesomeIcon icon={faUpRightFromSquare} /> whos only
          goal was to show the world: be as great as you can be and treat
          yourself like royalty.
        </MessageStyles.Text>
        <MessageStyles.Label>Noun</MessageStyles.Label>
        <MessageStyles.ListText>
          <li>A whole vibe</li>
          <li>A higher Vibration</li>
        </MessageStyles.ListText>
        <MessageStyles.Label>Verb</MessageStyles.Label>
        <MessageStyles.ListText>
          <li>To be a King or Queen</li>
          <li>To maintain a higher vibration</li>
          <li>To summon the energy to live, love and be great</li>
        </MessageStyles.ListText>
      </MessageStyles.SubContainer>
    </MessageStyles.MainContainer>
  );
};

export default Definition;
