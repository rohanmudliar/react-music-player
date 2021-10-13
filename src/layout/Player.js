import { useContext } from "react";
import Thumbnail from "../component/Thumbnail";
import Controls from "../component/Controls";
import Button from "../component/Button";
import Timer from "./Timer";
import Slider from "./Slider";

import CurrentSongContext from "../store/currentSongContext";

import "./Player.css";

const Player = (props) => {
  const { currentSelectedSong } = useContext(CurrentSongContext);
  const imgName = currentSelectedSong.thumbnail
    ? currentSelectedSong.thumbnail
    : "default.jpg";

  return (
    <div id="player" className="player">
      <div className="player__container">
        <Button
          className="player__container-menuBtnDiv"
          iconId="icon-menu"
          onClick={props.navBtnClick}
        />

        <div className="player__container-heading">
          <p>Playing Now</p>
        </div>

        <Thumbnail
          className="playing__container-currentPlayingThumbnail"
          imgSrc={`images/${imgName}`}
          defaultName="default"
        />

        <div className="playing__container-songTitle">
          <p>{currentSelectedSong.title}</p>
        </div>

        <div className="playing__container-ArtistName">
          <p>{currentSelectedSong.artistName}</p>
        </div>

        <Timer />
        <Slider />
        <Controls />
      </div>
    </div>
  );
};

export default Player;
