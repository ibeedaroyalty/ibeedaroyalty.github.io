import React from "react";
import HomeNavElement from "./HomeNavElement";
import { NavData } from "../navigationData";


function HomeNav (props) {
    return (
        <div>
            Hello There
            {
                Object.keys(NavData).map((keyName, i) => (
                    i > 0 ?
                    <HomeNavElement element={NavData[keyName]}/>
                    : null
                ))
            }
        </div>
    );
}

export default HomeNav