import styled, { keyframes } from "styled-components";
import Metal from '../../assets/General/metal4.jpeg'
import Hero from '../../assets/Home/HomeHero.PNG'


// Shared  styles
import { colorTransition, pulse } from "../../assets/shared/CustomKeyframes";
import { darkAccents, darkShades, lightAccent, lightShades } from "../../assets/shared/GeneralCSSValues";

const Button = styled.button`
    border-radius: 50%;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;

const buttonMixin = `
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: ${lightShades};
    box-shadow: 0 0 20px #eee;
    border-radius: 50%;
    display: block;
    margin: 10px;
`


export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const HeroImage = styled.div`
    width: 75vw;
    height: 60vh; 
    margin: 30px auto;
    border-radius: 25px;
    border: 15px inset ${lightShades};
    border-top-color: ${darkAccents};
    overflow: hidden;
    background-image: ${props => props.isOn ? `url(${Hero})` : 'none'};
    background-repeat: ${props => props.isOn ? 'no-repeat' : 'repeat'};
    background-position: ${props => props.isOn ? 'center' : 'inherit'};
    background-attachment: ${props => props.isOn ? 'fixed' : 'inherit'};
    background-size: ${props => props.isOn ?  'auto 100%' : 'auto'};
    background-color: ${props => props.isOn ? 'inherit' : 'black'};
    border-bottom-color: ${props => props.isOn ? 'gold' : lightAccent};
    align-self: ${props => props.isOn ? 'center' : 'flex-start'};
`;

export const BookNow = styled.button`
    background-image: linear-gradient(to right, #f85032 0%, #e73827  51%, #f85032  100%);
    margin: 10px auto;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    align-self: center;
    animation: ${pulse} 1s infinite alternate;
    font-weight: bold;

    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
`;

export const Title = styled.h1`
    animation: ${colorTransition} 4s infinite linear;
    font-family: "Vujahday Script", cursive;
    text-align: center;
    font-size: 10vw;
    margin: 5% auto;
`

export const NavContainer = styled.nav`
    width: 100vw;
    height: 15vh;
    background-image: url(${Metal});
    margin: 0 auto;
    align-self: baseline;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`

export const NavButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    overflow: scroll;
`

export const PowerButton = styled(Button)`
    ${buttonMixin}
    background-image: linear-gradient(to right, ${props => props.isOn ? '#D31027 0%, #EA384D  51%, #D31027  100%' : '#56ab2f 0%, #a8e063  51%, #56ab2f  100%'});
    border: 5px outset ${lightAccent};

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }
`;

export const NavButton = styled(Button)`
    ${buttonMixin}
    background-image: linear-gradient(to right, #000000 0%, #53346D  51%, #000000  100%);
    padding: 15px 45px;
    border-radius: 10px;
    border: 5px outset ${lightAccent};
    min-width: 50vw;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }
`;