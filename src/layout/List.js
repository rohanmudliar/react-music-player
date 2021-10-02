import Thumbnail from "../component/Thumbnail";
import MusicRow from "./MusicRow";
import songsList from "../songsList";

import "./List.css";

const List = () => {
  return (
    <div id="list" className="list">
      <div className="list__container">
        <div id="list__container-backBtn" className="list__container-backBtn">
          <svg className="backBtn">
            <use href="icons/sprite.svg#icon-arrow-long-left"></use>
          </svg>
        </div>

        <Thumbnail
          id="list__container-currentPlayingThumbnail"
          className="list__container-currentPlayingThumbnail"
          imgSrc="images/default.jpg"
          defaultName="default"
        />

        <div
          id="list__container-songsList"
          className="list__container-songsList"
        >
          <MusicRow lists={songsList} />
        </div>
      </div>
    </div>
  );
};

export default List;
