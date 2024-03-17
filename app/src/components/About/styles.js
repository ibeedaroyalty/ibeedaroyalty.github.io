import styled, {keyframes} from "styled-components";

import BackgroundImage from '../../assets/MainBackground.jpeg'

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
    width: 100%;
    background-color: black;

    @media(min-width: 1024px){
    
    }
  `,
  VideoContainer: styled.div`


    @media(min-width: 1024px){
      
    }
  `,
  Video: styled.video`


    @media(min-width: 1024px){
    
    }
  `
};

export const DefinitionStyles = {
  MainContainer: styled.div`
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

    @media(min-width: 1024px){
      font-size: 4em;
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

export const HomeStyles = {
  Container: styled.div`
  // background-image: url(${BackgroundImage});
  // width: 100vw;
  // height: 100vh;
  // overflow: scroll;
  // background-size: cover;
  // background-position: center;
`
}

export const VideoStyles = {
  Container: styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: black;

  @media(min-width: 1024px){
    width: 100vw;
  }
`,
  Video: styled.video`
    width: 100%;
    background-color: black;
  `
}