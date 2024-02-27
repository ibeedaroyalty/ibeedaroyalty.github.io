import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import PowerButton from "./PowerButton";
import { NavContainer } from "../styles";


function Nav (props) {
    return (
        <NavContainer>
            Hello from Nav
            <PowerButton/>
            <Button/>
            <Slider/>
        </NavContainer>
    );
}

export default Nav;