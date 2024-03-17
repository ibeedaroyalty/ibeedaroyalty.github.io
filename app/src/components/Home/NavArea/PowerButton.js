import React from "react";
import { PowerButtonOff, PowerButtonOn } from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";


function NavPowerButton (props) {
    return (
        <PowerButtonOff disabled>
            <FontAwesomeIcon icon={ faPowerOff} />
        </PowerButtonOff>
        // <PowerButton>On</PowerButton>
// <PowerButton disabled>Off</PowerButton>
    );

}

export default NavPowerButton;