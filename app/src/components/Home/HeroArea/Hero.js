import React from "react";
import CTA from "./CTA";
import Header from "./Header";
import { HeroImage } from "../styles";
import SocialMediaBar from "./SocialMediaBar";


function Hero (props) {
    return (
        <HeroImage isOn={true} >
            <Header/>
            {/* <CTA/> */}
            {/* <SocialMediaBar/> */}
        </HeroImage>
    );
}

export default Hero;