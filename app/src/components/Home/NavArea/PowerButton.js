import React from "react";
import { PowerButton } from "../styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";


function NavPowerButton (props) {
    return (
        <PowerButton isOn={true}>
            <FontAwesomeIcon icon={ faPowerOff} />
        </PowerButton>
    );

}

export default NavPowerButton;