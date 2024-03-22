import React from "react";
import { NavButton } from "../styles";


function Button (props) {
    return (
        <NavButton>
            {props.navItem.name}
        </NavButton>
    );
}

export default Button;