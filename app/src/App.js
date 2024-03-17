// Dependencies
import React, { useState } from "react";
import { 
  Routes, 
  Route, 
  BrowserRouter as Router 
} from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Artist from "./components/Artist/Artist";
import Artists from "./components/Artists/Artists";
import Beats from "./components/Beats/Beats";
import Events from "./components/Events/Events";
import Memorials from "./components/Memorials/Memorials";
import Services from "./components/Services/Services";

// Data 
import { ArtistData } from "./data/ArtistData";

function App() {

  const [artistData, setArtistData] = useState(ArtistData);
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <Router>
      <Routes>
        <Route path="/">
          {/* Home */}
          <Route index element={<Home />} />

          {/* About */}
          <Route
            exact
            path="about"
            element={<About showMenu={showMenu} setShowMenu={setShowMenu} />}
          />

          {/* Artists */}
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

          {/* Artists Mapped */}
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

          {/* Beats */}
          <Route
            exact
            path="beats"
            element={<Beats showMenu={showMenu} setShowMenu={setShowMenu} />}
          />

          {/* Events */}
          <Route
            exact
            path="events"
            element={<Events showMenu={showMenu} setShowMenu={setShowMenu} />}
          />

          {/* Memorials */}
          <Route
            exact
            path="memorials"
            element={<Memorials showMenu={showMenu} setShowMenu={setShowMenu} />}
          />

          {/* Services */}
          <Route
            exact
            path="services"
            element={<Services showMenu={showMenu} setShowMenu={setShowMenu} />}
          />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
