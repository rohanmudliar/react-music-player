import React, { useState, useContext } from "react";
import Button from "../component/Button";

import CurrentSongContext from "../store/currentSongContext";

function Row({ idx, title, artistName, currentSongDetails }) {
  const { currentSelectedSong } = useContext(CurrentSongContext);
  const [isSongPlaying, setIsSongPlaying] = useState(
    currentSelectedSong.title === title
  );

  const updateSongDetails = (event) => {
    const datacardno = event.target.getAttribute("datacardno");

    if (currentSelectedSong.id !== datacardno) {
      currentSongDetails(datacardno);
    }
    setIsSongPlaying(true);
  };

  const pauseBtnHandler = (event) => {
    event.stopPropagation();
    setIsSongPlaying(false);
  };

  const cardClass = `list__container-songCard ${
    isSongPlaying ? "selected" : ""
  }`;

  return (
    <div className={cardClass} datacardno={idx} onClick={updateSongDetails}>
      <div className="list__container-songInfo">
        <p className="list__container-songTitle">{title}</p>
        <p className="list__container-artistName">{artistName}</p>
      </div>
      {!isSongPlaying ? (
        <Button
          className="list__container-playBtn"
          iconId="icon-controller-play"
          svgClassName="list__container-playBtn"
        />
      ) : (
        <Button
          className="list__container-pauseBtn"
          iconId="icon-controller-paus"
          svgClassName="list__container-pauseBtn"
          title
          onClick={pauseBtnHandler}
        />
      )}
    </div>
  );
}

export default Row;
