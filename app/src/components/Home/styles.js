import styled from "styled-components";
import Metal from '../../assets/General/metal4.jpeg'
import Hero from '../../assets/Home/HomeHero.PNG'

// Shared button styles
const Button = styled.button`
    border-radius: 50%;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;
export const Title = styled.h1`
    font-family: "Vujahday Script", cursive;
    font-weight: 400;
    font-style: normal;
    color: white;
    font-size: 400%;
    text-align: center;
`

export const HomePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const HeroImageOn = styled.div`
    width: 75vw; //1180px;
    height: 75vh; //820px;
    margin: 2px auto;
    background-image: url(${Hero});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: contain;
    border-radius: 25px;
    border: 15px inset white;
    border-bottom-color: gold;
    border-top-color: grey;
    align-self: center;
    overflow: hidden;
`

export const HeroImageOff = styled.div`
    /* Styles for the off state if needed */
    width: 75vw; //1180px;
    height: 75vh; //820px;
    margin: 2px auto;
    background-image: none;
    background-color: black;
    border-radius: 25px;
    border: 15px inset white;
    border-top-color: grey;
    align-self: flex-start;
    overflow: hidden;
`

export const NavContainer = styled.nav`
    width: 95vw;
    height: 15vh;
    background-image: url(${Metal});
    margin: 0 auto;
    align-self: baseline;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`
export const ButtonArea = styled.div`
    width: 85%;
`

export const NavButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const buttonMixin = `
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 50%;
    display: block;
    margin: 10px;
`

export const PowerButtonOn = styled(Button)`
    ${buttonMixin}
    background-image: linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%);

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }
`;

export const PowerButtonOff = styled(Button)`
    ${buttonMixin}
    background-image: linear-gradient(to right, #56ab2f 0%, #a8e063  51%, #56ab2f  100%);

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
    border: 5px outset gold;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }
`;

export const BookNow = styled.button`
        background-image: linear-gradient(to right, #f85032 0%, #e73827  51%, #f85032  100%);
        margin: 10px;
        padding: 15px 45px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;            
        box-shadow: 0 0 20px #eee;
        border-radius: 10px;
        display: block;

    &:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
`