import React from "react";
import CTA from "./CTA";
import Header from "./Header";
import SocialMediaBar from "./SocialMediaBar";


function Hero (props) {
    return (
        <div>
            <Header/>
            <CTA/>
            <SocialMediaBar/>
        </div>
    );
}

export default Hero;