import { useContext } from "react";

import Thumbnail from "../component/Thumbnail";
import SongRows from "./SongRows";
import songsList from "../songsList";
import Button from "../component/Button";

import CurrentSongContext from "../store/currentSongContext";

import "./List.css";

const List = (props) => {
  const { currentSelectedSong } = useContext(CurrentSongContext);
  const imgName = currentSelectedSong.thumbnail
    ? currentSelectedSong.thumbnail
    : "default.jpg";
  return (
    <div id="list" className="list">
      <div className="list__container">
        <Button
          className="list__container-backBtn"
          iconId="icon-arrow-long-left"
          svgClassName="backBtn"
          onClick={props.navBtnClick}
        />

        <Thumbnail
          className="list__container-currentPlayingThumbnail"
          imgSrc={`images/${imgName}`}
          defaultName="default"
          onClick={props.navBtnClick}
        />

        <div className="list__container-songsList">
          <SongRows lists={songsList} />
        </div>
      </div>
    </div>
  );
};

export default List;
