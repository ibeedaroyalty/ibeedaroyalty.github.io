import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import PowerButton from "./PowerButton";
import { NavContainer } from "../styles";
import { data } from "./data";


function Nav (props) {
    return (
        <NavContainer>
            <PowerButton/>
            {
                data.map(navItem => navItem.subItems ?
                    <Slider navItem={navItem} />
                    : <Button navItem={navItem}/>)
            }
        </NavContainer>
    );
}

export default Nav;