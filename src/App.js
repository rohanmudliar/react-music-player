import { useState } from "react";
import List from "./layout/List";
import Player from "./layout/Player";

import CurrentSongContext from "./store/currentSongContext";

import "./App.css";
function App() {
  const [activePlayerScreen, setActivePlayerScreen] = useState(true);
  const [currentSelectedSong, setcurrentSelectedSong] = useState({});
  const [isSongPlaying, setisSongPlaying] = useState(false);

  const navigateClickHandler = () => {
    setActivePlayerScreen((previousState) => !previousState);
  };

  return (
    <CurrentSongContext.Provider
      value={{
        currentSelectedSong,
        setcurrentSelectedSong,
        isSongPlaying,
        setisSongPlaying,
      }}
    >
      {activePlayerScreen ? (
        <Player navBtnClick={navigateClickHandler} />
      ) : (
        <List navBtnClick={navigateClickHandler} />
      )}
    </CurrentSongContext.Provider>
  );
}

export default App;
