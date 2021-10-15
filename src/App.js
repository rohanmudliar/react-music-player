import { useState, useEffect, useCallback } from "react";
import List from "./layout/List";
import Player from "./layout/Player";
import songsList from "./songsList";
import { calculateTime } from "./Helper";

import PlayerStateContext from "./store/PlayerStateContext";

import "./App.css";

const audio = new Audio();

function App() {
  const [activePlayerScreen, setActivePlayerScreen] = useState(true);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [selectedRowId, setCurrentRowId] = useState(0);
  const [previousSelectedSong, setPreviousSelectedSong] = useState({});
  const [doReplaySong, setDoReplaySong] = useState(false);
  const [currentSelectedSong, setCurrentSelectedSong] = useState(
    songsList[selectedRowId]
  );
  const [timers, setTimers] = useState({
    currentTime: calculateTime(0),
    duration: calculateTime(0),
  });

  const [sliderVal, setSliderVal] = useState({
    noOfParts: 0,
    dotLeftVal: 0,
  });

  const songLoaded = () => {
    audio.play();
    setTimers((previousTimers) => ({
      ...previousTimers,
      duration: calculateTime(audio.duration),
    }));

    setSliderVal((previousState) => ({
      ...previousState,
      noOfParts: (218 / audio.duration).toFixed(2),
    }));
  };

  const timeupdate = () => {
    setTimers((previousTimers) => ({
      ...previousTimers,
      currentTime: calculateTime(audio.currentTime),
    }));

    setSliderVal((previousState) => ({
      ...previousState,
      dotLeftVal: previousState.noOfParts * audio.currentTime,
    }));
  };

  const songEnded = useCallback(() => {
    audio.removeEventListener("loadeddata", songLoaded);
    audio.removeEventListener("timeupdate", timeupdate);
    audio.removeEventListener("ended", songEnded);
    audio.removeEventListener("error", songPlaybackError);
    if (selectedRowId === songsList.length - 1) {
      setCurrentRowId(0);
    } else {
      setCurrentRowId((previousId) => previousId + 1);
    }
  }, [selectedRowId]);

  const songPlaybackError = () => {
    alert("Please check your internet Connection");
  };

  useEffect(() => {
    setCurrentSelectedSong(songsList[selectedRowId]);

    if (
      (previousSelectedSong !== currentSelectedSong || doReplaySong) &&
      isSongPlaying
    ) {
      setDoReplaySong(false);
      setPreviousSelectedSong(currentSelectedSong);
      setTimers(() => ({
        currentTime: calculateTime(0),
        duration: calculateTime(0),
      }));

      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = `./images/favicons/${currentSelectedSong.favIcon}.ico`;
      document.getElementsByTagName("head")[0].appendChild(link);

      audio.src = `./${currentSelectedSong.localsrc}`;
      audio.addEventListener("loadeddata", songLoaded);
      audio.addEventListener("timeupdate", timeupdate);
      audio.addEventListener("ended", songEnded);
      audio.addEventListener("error", songPlaybackError);
    } else if (previousSelectedSong === currentSelectedSong && isSongPlaying) {
      audio.play();
    } else if (previousSelectedSong === currentSelectedSong && !isSongPlaying) {
      audio.pause();
    }
  }, [
    selectedRowId,
    setCurrentSelectedSong,
    doReplaySong,
    setDoReplaySong,
    previousSelectedSong,
    currentSelectedSong,
    setPreviousSelectedSong,
    isSongPlaying,
    songEnded,
  ]);

  const navigateClickHandler = () => {
    setActivePlayerScreen((previousState) => !previousState);
  };

  const replayHandler = () => {
    setDoReplaySong(true);
  };

  return (
    <PlayerStateContext.Provider
      value={{
        songsList,
        currentSelectedSong,
        setCurrentSelectedSong,
        isSongPlaying,
        setIsSongPlaying,
        selectedRowId,
        setCurrentRowId,
        sliderVal,
      }}
    >
      <Player
        navBtnClick={navigateClickHandler}
        className={activePlayerScreen ? "" : "hidden"}
        replayHandler={replayHandler}
        timers={timers}
        audioObj={audio}
      />
      <List
        navBtnClick={navigateClickHandler}
        className={activePlayerScreen ? "hidden" : ""}
      />
    </PlayerStateContext.Provider>
  );
}

export default App;
