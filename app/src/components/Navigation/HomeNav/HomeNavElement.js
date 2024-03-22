import React from "react";
import { Link } from "react-router-dom";
import { DisabledNaviLink, NaviLink } from "../styles";


function HomeNavElement (props) {
    return (
        props.element.active ?
        <Link
            to={props.element.url}
        >
            <NaviLink>
                {props.element.name}
            </NaviLink>
        </Link>
        : <Link>
            <DisabledNaviLink>
                {props.element.name}
            </DisabledNaviLink>
        </Link>
    );
}

export default HomeNavElement