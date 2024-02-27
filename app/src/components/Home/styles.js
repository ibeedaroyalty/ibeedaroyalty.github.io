import styled, { keyframes } from "styled-components";
import BackgroundImage from '../../assets/HomeBG2.jpg'
import Metal from '../../assets/metal4.jpeg'
import Hero from '../../assets/HomeHero.PNG'

export const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${BackgroundImage});
    display: flex;
    flex-direction: column;
`

export const HeroImageOn = styled.div`
    width: 85vw;
    height: 60vh;
    margin: 20px auto;
    background-image: url(${Hero});
    background-repeat: no-repeat;
    background-position:center;
    background-attachment: fixed;
    background-size: fit;
    border-radius: 25px;
    border: 15px inset white;
    border-bottom-color: gold;
    border-top-color: grey;
`

export const HeroImageOff = styled.div`

`

export const NavContainer = styled.nav`
    width: 85vw;
    height: 10vh;
    background-image: url(${Metal});
    margin: 0 auto;
`