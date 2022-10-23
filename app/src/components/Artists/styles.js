import styled from "styled-components";
import IBRImage from '../../assets/ibr.PNG'

export const ArtistLinkStyles = {
  Container: styled.div`
    border-radius: 50%;
    width: 95vw;
    height: 95vw;
    background: url(${({ desktop }) => desktop}) no-repeat;
    background-position: center;
    background-size: cover;
    margin: 3% auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    &:hover {
      background: url(${({ mobile }) => mobile}) no-repeat;
      background-position: center;
      background-size: cover;
    }

    @media (min-width: 1024px) {
      width: 500px;
      height: 500px;
    }
  `,
  Name: styled.p`
    font-size: 2.5em;
    color: ${({ color }) => color};
    font-weight: bold;
    align-self: flex-bottom;
    font-family: ${({ font }) => font};
    text-shadow: 2px 2px ${({ shadow }) => shadow};
  `,
};

export const ArtistsStyles = {
  Container: styled.div`
    background-image: url(${IBRImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    overflow: scroll;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `,
  SubContainer: styled.div`
    width: 95%;
    margin: 0 auto;

    @media(min-width: 768px){
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center; 
    }
  `,
  Title: styled.div``,
};
