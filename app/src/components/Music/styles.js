import styled from "styled-components";

export const AlbumsStyles = {
  AlbumArt: styled.img`
    width: 80%;
  `,
  AlbumContainer: styled.div`
    width: 100vw;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0 auto;
    overflow: scroll;
    padding-bottom: 5%;
  `,
  AlbumPicker: styled.div`

    padding: 5%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: flex-start;

    width: 90%;

    @media (min-width: 1024px) {
      width: 50%;
    }
  `,
  AlbumPickerButton: styled.button`
    color: white;
    width: 20%;
    padding: 2%;
    font-size: 1.5em;
    background: rgba(0,0,0,0.5);
    border: none;
  `,
  AlbumInfoContainer: styled.div`
    width: 96%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  `,
  AlbumArtContainer: styled.div`
    text-align: center;
    width: 100%;

    @media (min-width: 1024px) {
      width: 30%;
    }
  `,
  AlbumTitleContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 1024px) {
      width: 30%;
    }
  `,
  AlbumTitle: styled.h1`
    font-family: ${({ font }) => font};
    text-align: center;
    color: white;
    text-shadow: 6px 6px ${({ shadow }) => shadow};
  `,
  AlbumSongContainer: styled.div`
    width: 100%;

    @media (min-width: 1024px) {
      width: 30%;
    }
  `,
};

export const SongStyles = {
  SongTitle: styled.p`
    color: white;
    font-size: 1.5em;
    text-align: center;
    font-weight: bold;
    text-shadow: 2px 4px black;

    @media(min-width: 1024){
      
    }
  `,
};
