import React, { useState } from "react";
import MusicBar from "../socialMedia/MusicaBar";
import Song from "./Song";
import { AlbumsStyles } from "./styles";
const Albums = (props) => {
  const [activeAlbum, setActiveAlbum] = useState(props.artist.releases[0]);

  function handleClick(id) {
    setActiveAlbum(props.artist.releases[id]);
  }

  return (
    <AlbumsStyles.AlbumContainer image={props.artist.photos.background}>
      <AlbumsStyles.AlbumPicker>
        {props.artist.releases.map((r, i) => (
          <AlbumsStyles.AlbumPickerButton
            mainColor={props.artist.colors.main}
            secondary={props.artist.colors.shadow}
            onClick={() => handleClick(i)}
          >
            {r.year === activeAlbum.year ? <strong>{r.year}</strong> : r.year}
          </AlbumsStyles.AlbumPickerButton>
        ))}
      </AlbumsStyles.AlbumPicker>

      <AlbumsStyles.AlbumInfoContainer>
        <AlbumsStyles.AlbumArtContainer>
          <AlbumsStyles.AlbumArt
            src={activeAlbum.frontCover}
            onMouseOver={
              activeAlbum.backCover
                ? (e) => (e.currentTarget.src = activeAlbum.backCover)
                : null
            }
            onMouseOut={
              activeAlbum.frontCover
                ? (e) => (e.currentTarget.src = activeAlbum.frontCover)
                : null
            }
          />
        </AlbumsStyles.AlbumArtContainer>
        <AlbumsStyles.AlbumTitleContainer>
          <AlbumsStyles.AlbumTitle
            font={props.artist.fonts.header}
            color={props.artist.colors.main}
            shadow={props.artist.colors.shadow}
          >
            {activeAlbum.name}
          </AlbumsStyles.AlbumTitle>
          <MusicBar activeAlbum={activeAlbum} />
        </AlbumsStyles.AlbumTitleContainer>
        <AlbumsStyles.AlbumSongContainer>
          {activeAlbum.music
            ? activeAlbum.music.map((s) => <Song song={s} />)
            : null}
        </AlbumsStyles.AlbumSongContainer>
      </AlbumsStyles.AlbumInfoContainer>
    </AlbumsStyles.AlbumContainer>
  );
};

export default Albums;
