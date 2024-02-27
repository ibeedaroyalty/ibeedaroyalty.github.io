import React from "react";
import { NavButtonOn } from "../styles";


function Button (props) {
    return (
        <NavButtonOn>
            {props.navItem.name}
        </NavButtonOn>
    );
}

export default Button;