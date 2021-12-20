import React, { useState } from "react";
import Player from "./components/player";
import Song from "./components/song";
import "./style/app.scss";
import "boxicons";
import data from "./util";
import Library from "./components/library";
import { CustomCursor } from "./CustomCursor";
import Nav from "./components/nav";
import ParticlesApp from "./components/particles";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className="App">

      <CustomCursor />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
      <ParticlesApp />
    </div>
  );
}

export default App;
