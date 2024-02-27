import React from "react";
import { PowerButtonOn, PowerButtonOff } from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";


function PowerButton (props) {
    return (
        <PowerButtonOn>
            <FontAwesomeIcon icon={ faPowerOff} />
        </PowerButtonOn>
    );

}

export default PowerButton;