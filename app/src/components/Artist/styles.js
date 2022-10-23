import styled, { keyframes } from "styled-components";

const Transition = keyframes`
from {
  scale(1.01)
  transform: translateX(-1%);
}  
to {
  scale(1.02)
  transform: translateX(1%);
  }
`;

const scroll = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const ArtistStyles = {
  Container: styled.div`
    background-image: url(${({ mobile }) => mobile});
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: scroll;

    @media (min-width: 1024px) {
      background-image: url(${({ desktop }) => desktop});
    }
  `,
};


export const BioStyles = {
  Container: styled.div`
    background: rgba(0, 0, 0, 0.5);
    color: white;
    margin: 0 auto;
    padding: 4%;
    text-align: center;
    font-size: 1.25em;
  `,
};

export const HeroStyles = {
  MainContainer: styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
  `,
  SubContainer: styled.section`
    // background-image: url(${({ mobile }) => mobile});
    background-repeat: repeat-x;
    background-position: center;
    background-size: cover;
    width: calc(100vw + 20px);
    height: 100vh;
    transform: scale(1.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-family: sans-serif;
    flex-direction: column;
    animation: ${Transition} 1s alternate infinite;
    transform: scale(1.2);

    @media (min-width: 1024px) {
      // background-image: url(${({ desktop }) => desktop});
      font-size: 4em;
    }
  `,
  ArtistName: styled.h1`
    font-family: ${({ font }) => font};
    color: ${({ color }) => color};
    margin-top: 100px;
    margin-bottom: 10px;
    text-shadow: 6px 6px ${({ shadow }) => shadow};
    padding-top: 25%;
  `,
};

export const MarqueeStyles = {
  Container: styled.div`
    background-color: black;
    width: 100vw;
    color: white;
    height: 50px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  `,
  Message: styled.p`
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 50px;
    text-align: center;
    /* Starting position */
    transform: translateX(100%);
    animation: ${scroll} 15s linear infinite;
    text-transform: uppercase;
  `,
};

