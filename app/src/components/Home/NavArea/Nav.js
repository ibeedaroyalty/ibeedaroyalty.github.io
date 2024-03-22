import React from "react";
import PowerButton from "./PowerButton";
import { NavContainer } from "../styles";
import NavButtons from "./NavButtons";


function Nav (props) {
    return (
        <NavContainer>
            <PowerButton/>
            <NavButtons/>
        </NavContainer>
    );
}

export default Nav;