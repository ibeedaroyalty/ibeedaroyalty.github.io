import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  LinkContainer,
  NavigationClose,
  NavigationContainer,
  NavigationOpen,
  NavigationOverlay,
  NaviLink,
  NavOpen,
} from "./styles";

import '../../App.css'
import Logo from '../../assets/logo.png'
import ContactBar from "./ContactBar";

const Nav = (props) => {
  return props.showMenu ? (
    <NavigationOverlay>
      <NavigationContainer onMouseLeave={() => props.setShowMenu(false)}>
        <LinkContainer>
          <NavigationClose>
            <FontAwesomeIcon
              onClick={() => props.setShowMenu(false)}
              icon={faXmark}
            />
          </NavigationClose>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => props.setShowMenu(false)}
          >
            <NaviLink>Home</NaviLink>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            onClick={() => props.setShowMenu(false)}
          >
            <NaviLink>About</NaviLink>
          </Link>
          <Link
            to="/artists"
            style={{ textDecoration: "none" }}
            onClick={() => props.setShowMenu(false)}
          >
            <NaviLink>Artists</NaviLink>
          </Link>

          {/* <Link style={{ textDecoration: "none", pointerEvents: "none" }} to="/">
            <NaviLink>Live</NaviLink>
          </Link>
          <Link style={{ textDecoration: "none", pointerEvents: "none" }} to="/" onClick={() => alert('Coming Real soon')}>
            <NaviLink>News Room</NaviLink>
          </Link>
          <Link style={{ textDecoration: "none", pointerEvents: "none" }} to="/">
            <NaviLink>Booking</NaviLink>
          </Link> */}

        </LinkContainer>
        

        {/* <ContactBar /> */}
      </NavigationContainer>
    </NavigationOverlay>
  ) : (
    <NavigationOpen onClick={() => props.setShowMenu(true)}>
      <NavOpen src={Logo} />
    </NavigationOpen>
  );
}

export default Nav