import { Fragment } from "react";
import "./MusicRow.css";

const MusicRow = ({ lists }) => {
  return (
    <Fragment>
      {lists.map((song, i) => (
        <div
          id="list__container-songCard"
          className="list__container-songCard"
          datacardno={i}
          key={i}
        >
          <div className="list__container-songInfo">
            <p className="list__container-songTitle">{song.title}</p>
            <p className="list__container-artistName">{song.artistName}</p>
          </div>
          <div className="list__container-playPauseBtn">
            <svg className="list__container-playBtn">
              <use href="icons/sprite.svg#icon-controller-play"></use>
            </svg>
            <svg className="list__container-pauseBtn hidden">
              <use href="icons/sprite.svg#icon-controller-paus"></use>
            </svg>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default MusicRow;
