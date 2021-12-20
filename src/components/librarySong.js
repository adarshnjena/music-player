import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const LibrarySong = ({ song, setCurrentSong, setIsPlaying, currentSong}) => {
  const onClickHandler = () => {
    currentSong.active = false;
    setIsPlaying(false);
    song.active = true;
    setCurrentSong(song);
  };
  return (
    <div
      onClick={onClickHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="hello" />
      <div className="song-dis">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        <FontAwesomeIcon icon={faPlay} className="play_icon" size="3x" />
      </div>
    </div>
  );
};

export default LibrarySong;
