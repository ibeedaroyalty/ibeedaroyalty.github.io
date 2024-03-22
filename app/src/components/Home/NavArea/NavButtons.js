import React from "react";
import Button from "./Button";
import Slider from "./Slider";
import { data } from "./data";
import { NavButtonsContainer as Container } from "../styles";

function NavButtons (props) {
    return (
        <Container>
            {
                data.map(navItem => navItem.subItems ?
                    <Slider navItem={navItem} />
                    : <Button navItem={navItem}/>)
            }
        </Container>
    );
}

export default NavButtons;