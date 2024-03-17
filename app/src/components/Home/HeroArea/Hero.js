import React from "react";
import CTA from "./CTA";
import Header from "./Header";
import { HeroImageOff, HeroImageOn } from "../styles";
import SocialMediaBar from "./SocialMediaBar";


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