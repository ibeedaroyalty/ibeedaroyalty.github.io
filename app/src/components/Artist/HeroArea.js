import React from "react";
import SocialBar from "../socialMedia/SocialBar";
import { HeroStyles } from "./styles";

const HeroArea = ({ colors, desktopImg, font, mobileImg, name, socialMedia }) => {
  return (
    <HeroStyles.MainContainer>
      <HeroStyles.SubContainer desktop={desktopImg} mobile={mobileImg}>
        <HeroStyles.ArtistName
          font={font}
          color={colors.main}
          shadow={colors.shadow}
        >
          {name}
        </HeroStyles.ArtistName>
        <SocialBar socialMedia={socialMedia}/>
      </HeroStyles.SubContainer>
    </HeroStyles.MainContainer>
  );
};

export default HeroArea;
