import styled, {keyframes} from "styled-components";

const ColorTransition = keyframes`
  0% {
    color: gold;
  }

  25% {
    color: white;
  }
  50% {
    color: purple;
  }
  75% {
    color: white;
  }
  100% {
    color: gold;
  }
`
export const HeroStyles = {
  Container: styled.section`
    width: 100vw;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;

    @media(min-width: 1024px){
      min-height: 100vh;
    }
  `,
  VideoContainer: styled.div`
    width: 100%;
    height: auto;
    @media(min-width: 1024px){
      
    }
  `,
  Video: styled.video`
    width: 100%;

    @media(min-width: 1024px){
    
    }
  `
};

export const MessageStyles = {
  MainContainer: styled.section`
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  `,
  Key: styled.p`
    text-align: center;
    font-size: 1.5em;
  `,
  SubContainer: styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 96%;
    // padding: 2%;
    height: 100%;
    @media (min-width: 1024px) {
      padding: 3%;
      height: auto;
      width: 50%;
    }
  `,
  Title: styled.h2`
    font-family: "Babylonica", cursive;
    font-size: 3.5em;
    animation: ${ColorTransition} 4s infinite linear;
    text-align: center;
    font-weight: bold;

    @media(min-width: 1024px){
      font-size: 50vw;
    }
  `,

  Label: styled.h3`
    font-family: "Pacifico", cursive;
    font-size: 2em;
    color: gold;
  `,
  Text: styled.p`
    font-size: 1.5em;
  `,
  ListText: styled.ol`
    font-size: 1.5em;
  `,
  Queen: styled.a`
    animation: ${ColorTransition} 4s infinite linear;
    text-decoration: none;
  `,
};

export const TeamStyles = {
  MainContainer: styled.section`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  `
}

export const LocationStyles = {
  MainContainer: styled.section`
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  `
}