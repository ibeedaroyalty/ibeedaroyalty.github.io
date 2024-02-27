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
    align-items: center;
    justify-content: space-between;
`

export const HeroImageOn = styled.div`
    width: 85vw;
    height: 60vh;
    margin: 2px auto;
    background-image: url(${Hero});
    background-repeat: no-repeat;
    background-position:center;
    background-attachment: fixed;
    background-size: fit;
    border-radius: 25px;
    border: 15px inset white;
    border-bottom-color: gold;
    border-top-color: grey;
    align-self: flex-start;
`

export const HeroImageOff = styled.div`

`

export const NavContainer = styled.nav`
    width: 85vw;
    height: 15vh;
    background-image: url(${Metal});
    margin: 0 auto;
    align-self: baseline;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PowerButtonOn = styled.button`
    background-color: red;
    border-radius: 50%;
    padding: 20px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

export const PowerButtonOff = styled.button`
    background-color: green;
    border-radius: 50%;
    padding: 20px;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`
export const NavButtonOn = styled.button`
    background-color: orange;
    border: 5px outset gold;
    padding: 10px;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`