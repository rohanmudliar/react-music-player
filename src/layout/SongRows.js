import { Fragment, useContext } from "react";
import Row from "./Row";
import CurrentSongContext from "../store/currentSongContext";

import "./SongRows.css";

const SongRows = ({ lists }) => {
  const { setcurrentSelectedSong } = useContext(CurrentSongContext);

  const currentSongDetails = (idx) => {
    setcurrentSelectedSong(lists[idx]);
  };

  return (
    <Fragment>
      {lists.map(({ title, artistName }, idx) => (
        <Row
          key={idx}
          idx={idx}
          title={title}
          artistName={artistName}
          currentSongDetails={currentSongDetails}
        />
      ))}
    </Fragment>
  );
};

export default SongRows;
