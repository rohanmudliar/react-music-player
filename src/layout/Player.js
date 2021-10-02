import Thumbnail from "../component/Thumbnail";
import Controls from "../component/Controls";
import Button from "../component/Button";
import Timer from "./Timer";
import Slider from "./Slider";

import "./Player.css";

const Player = () => {
  return (
    <div id="player" className="player hide">
      <div className="player__container">
        <Button
          id="player__container-menuBtnDiv"
          className="player__container-menuBtnDiv"
          iconId="icon-menu"
        />

        <div className="player__container-heading">
          <p>Playing Now</p>
        </div>

        <Thumbnail
          id="playing__container-currentPlayingThumbnail"
          className="playing__container-currentPlayingThumbnail"
          imgSrc="images/default.jpg"
          defaultName="default"
        />

        <div
          id="playing__container-songTitle"
          className="playing__container-songTitle"
        >
          <p></p>
        </div>

        <div
          id="playing__container-ArtistName"
          className="playing__container-ArtistName"
        >
          <p></p>
        </div>

        <Timer />

        <Slider />

        <Controls />
      </div>
    </div>
  );
};

export default Player;
