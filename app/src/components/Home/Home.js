import React from "react";
import Hero from "./HeroArea/Hero";
import Nav from "./NavArea/Nav";
import { MainContainer } from "./styles";
import CTA from "./HeroArea/CTA";
import SocialMediaBar from "./HeroArea/SocialMediaBar";


function Home() {
    return (
      <MainContainer>
        <Hero/>
        {/* <SocialMediaBar/> */}
        <CTA/>
        <Nav/>
      </MainContainer>
    );
}

export default Home;

