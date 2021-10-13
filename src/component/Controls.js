import { useContext } from "react";
import Button from "./Button";
import "./Controls.css";

import CurrentSongContext from "../store/currentSongContext";
const audio = new Audio();

const Controls = () => {
  const { currentSelectedSong, isSongPlaying, setisSongPlaying } =
    useContext(CurrentSongContext);

  const playPauseHandler = () => {
    setisSongPlaying((previousState) => !previousState);

    if (!isSongPlaying) {
      audio.src = `./${currentSelectedSong.localsrc}`;
      audio.addEventListener("loadeddata", () => {
        audio.play();
      });
    } else {
      audio.pause();
    }
  };

  return (
    <div className="playing__container-controls">
      <Button
        className="playing__container-previousBtn"
        iconId="icon-controller-jump-to-start"
      />

      {!isSongPlaying ? (
        <Button
          className="playing__container-playBtn"
          iconId="icon-controller-play"
          onClick={playPauseHandler}
        />
      ) : (
        <Button
          className="playing__container-pauseBtn"
          iconId="icon-controller-paus"
          onClick={playPauseHandler}
        />
      )}

      <Button
        className="playing__container-nextBtn"
        iconId="icon-controller-next"
      />
    </div>
  );
};

export default Controls;
