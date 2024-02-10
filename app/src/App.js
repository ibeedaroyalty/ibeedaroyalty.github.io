import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Artist from "./components/Artist/Artist";
import Artists from "./components/Artists/Artists";
import Home from "./components/Home/Home";
import { ArtistData } from "./data/ArtistData";
import About from "./components/About/About";

function App() {
  const [artistData, setArtistData] = useState(ArtistData);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={<Home showMenu={showMenu} setShowMenu={setShowMenu} />}
        />
        <Route
          exact
          path="about"
          element={
            <About
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          }
        />
        <Route
          exact
          path="artists"
          element={
            <Artists
              artists={artistData}
              setArtistData={setArtistData}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          }
        />
        {artistData.map((artist) => (
          <Route
            path={`artists/${artist.linkTo}`}
            element={
              <Artist
                artist={artist}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
