import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  16% {
    transform: scale(1.1);
  }
  25% {
    transform: scale(1);
  }
  48% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const LinkContainer = styled.div`
  margin-top: 1vh;
`

const NavigationOverlay = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  z-index: 1000000;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: flex-start;

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

const NavigationContainer = styled.nav`
  width: 75vw;
  background: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: column;
  padding: 1%;
  justify-content: space-between;

  @media(min-width: 1024px){
    width: 30vw;
  }
`

const NavigationOpen = styled.button`
  border: none;
  position: fixed;
  left: 1%;
  top: 1%;
  z-index: 1;
  width: 75px;
  height: 75px;
  font-size: 50px;
  background-color: transparent;

  @media(min-width: 768px){
    width: 100px;
    height: 100px;
  }
`;

const NavigationClose = styled.div`
  border: none;
  font-size: 25px;
  background-color: transparent;
  width: 100%;
  text-align: left;
  padding-left: 4%;
  display: flex;
`;

const LogoContainer = styled.div`
height: 50px;
margin: 0 auto;
width: 70%;
`
const LogoIcon = styled.img`
  height: 50px;
`

const NaviLink = styled.p`
  text-transform: uppercase;
  font-size: 2em;
  text-decoration: none !important;
  color: purple;
  margin-left: 4%;

  &:hover {
    color: gold;
  }
`

const DisabledNaviLink = styled.p`
  text-transform: uppercase;
  font-size: 2em;
  text-decoration: none;
  color: grey;
  margin-left: 4%;
  cursor: default;
`

const NavControl = styled.div`
  display: flex;
  flex-direction: row;
`

const NavOpen = styled.img`
  height: 50px;
  width: 50px;
  border: 2px solid gold;
  border-radius: 50%;
  animation: ${pulse} 1s infinite alternate;
  background: rgba(255,255,255, 0.25);
`

export {
  NavigationOverlay,
  NavigationContainer,
  NavigationOpen,
  NavigationClose,
  DisabledNaviLink,
  NaviLink,
  LogoIcon,
  LogoContainer,
  NavControl,
  NavOpen,
  LinkContainer  
}