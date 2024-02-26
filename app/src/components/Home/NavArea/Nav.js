import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import PowerButton from "./PowerButton";


function Nav (props) {
    return (
        <div>
            Hello from Nav
            <PowerButton/>
            <Button/>
            <Slider/>
        </div>
    );
}

export default Nav;