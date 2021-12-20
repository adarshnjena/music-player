import React from "react";
import LibrarySong from "./librarySong";

const Library = ({
  libraryStatus,
  songs,
  setCurrentSong,
  setIsPlaying,
  currentSong,
}) => {
  return (
    <div className={`library ${libraryStatus ? "libraryActive" : ""}`}>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              currentSong={currentSong}
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
              setIsPlaying={setIsPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
