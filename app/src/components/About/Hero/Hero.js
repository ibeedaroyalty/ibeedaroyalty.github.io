import React from "react";
import VideoIntro from "./VideoIntro";
import { HeroStyles } from "../styles";

function Hero (props) {
    return (
        <HeroStyles.Container>
            <VideoIntro/>
        </HeroStyles.Container>
    );
}

export default Hero;