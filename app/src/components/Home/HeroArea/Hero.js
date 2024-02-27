import React from "react";
import CTA from "./CTA";
import Header from "./Header";
import SocialMediaBar from "./SocialMediaBar";
import { HeroImageOff, HeroImageOn } from "../styles";


function Hero (props) {
    return (
        <HeroImageOn>
            <Header/>
            <CTA/>
            <SocialMediaBar/>
        </HeroImageOn>
    );
}

export default Hero;