import React from "react";
import VideoIntro from "./VideoIntro";
import { HeroStyles } from "../styles";

function Hero (props) {
    return (
        <HeroStyles.Container>
            Welcome to iBDR!

            <div>
                <VideoIntro/>
            </div>
        </HeroStyles.Container>
    );
}

export default Hero;