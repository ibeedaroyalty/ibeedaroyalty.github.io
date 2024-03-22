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

          iBeeDaRoyalty, our exuberant music promotion company, passionately upholds and carries forward the enduring legacy of the extraordinary {"}"}
          <MessageStyles.Queen
            href="https://www.9news.com/article/news/local/queen-ashbys-mom-reflects-on-daugthers-life/73-533842732"
            target="_blank"
          >
            Queen T Ashby
          </MessageStyles.Queen>
          <FontAwesomeIcon icon={faUpRightFromSquare} />.
          <br/>
          A phenomenal woman, she was an inspiration, a beacon of hope and positivity who dedicated her life to encouraging people from all walks of life to aspire to their dreams, to reach for the stars, and to recognize and embrace their inherent worth as the royalty they truly are. Her unwavering belief in the power of self-worth and ambition touched countless lives and continues to inspire. 
          <br/>
          This deep-seated admiration and respect for Queen T Ashby and the noble values she fervently championed, forms the pulsating heart and soul of iBeeDaRoyalty. With her empowering ideals of ambition, self-worth, and relentless positivity serving as our guiding melody, we are unwaveringly committed to promoting music that resonates with her vibrant, indomitable spirit. Our mission is to uplift, inspire, and foster a sense of self-belief, mirroring Queen T Ashby's life-long mission.
        </MessageStyles.Text>

        <MessageStyles.Label>Noun</MessageStyles.Label>
        <MessageStyles.ListText>
          <li>- A whole vibe: a mood or environment filled with positivity and ambition.</li>
          <li>- A higher vibration: a higher level of emotional and mental understanding that makes life more enjoyable.</li>
        </MessageStyles.ListText>

        <MessageStyles.Label>Verb</MessageStyles.Label>
        <MessageStyles.ListText>
          <li>- To be a King or Queen: a strong action showing a ruler's main traits - leadership, strength, and wisdom.</li>
          <li>- To sustain a higher vibration: Keeping a positive emotional and mental state, which is important for overall health and happiness.</li>
          <li>- To find the power to live, love, and succeed: Use your inner strength and determination to enjoy life, spread love, and achieve great things.</li>
        </MessageStyles.ListText>
      </MessageStyles.SubContainer>
    </MessageStyles.MainContainer>
  );
};

export default Definition;