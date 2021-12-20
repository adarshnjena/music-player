import React, { useRef, useState } from "react";

const Player = ({ currentSong, isPlaying, setIsPlaying, songs, setCurrentSong }) => {
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0.0,
    duration: 0.0,
  });
  const playSongHandler = async () => {
    if (isPlaying) {
      await audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      await audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = async (e) => {
    const current = await e.target.currentTime;
    const duration = await e.target.duration;
    await setSongInfo({ currentTime: current, duration });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = async (e) => {
    audioRef.current.currentTime = e.target.value;
    await setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const songChangeHandler = async (change) => {
    let index = songs.findIndex((song) => song.id === currentSong.id);
    songs[index].active = false;
    if (change === "next") {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }
      songs[(index + 1) % songs.length].active = true;
      await setCurrentSong(songs[(index + 1) % songs.length]);
    }
    if (change === "back") {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }
      if (index === 0) { index = songs.length }
      songs[index - 1].active = true;
      await setCurrentSong(songs[(index - 1)]);
    }
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <box-icon onClick={() => songChangeHandler('back')} border="circle" name="chevron-left" size="7vh" color="white"></box-icon>
        <box-icon
          onClick={playSongHandler}
          border="circle"
          name={isPlaying ? "pause" : "play"}
          size="7vh"
          color="white"
        ></box-icon>
        <box-icon onClick={() => songChangeHandler('next')} border="circle" name="chevron-right" size="7vh" color="white"></box-icon>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={(timeUpdateHandler, playSongHandler)}
        onEnded={() => songChangeHandler('next')}
      ></audio>
    </div>
  );
};

export default Player;
