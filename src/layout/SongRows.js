import { Fragment, useContext } from "react";

import Row from "../component/Row";

import PlayerStateContext from "../store/PlayerStateContext";

const SongRows = ({ lists }) => {
  const {
    setCurrentSelectedSong,
    isSongPlaying,
    setIsSongPlaying,
    selectedRowId,
    setCurrentRowId,
  } = useContext(PlayerStateContext);

  const playBtnHandler = (event) => {
    const dataCardNo = event.target.getAttribute("data-cardno");
    setCurrentRowId(+dataCardNo);
    setCurrentSelectedSong(lists[dataCardNo]);
    setIsSongPlaying(true);
  };

  const pauseBtnHandler = (event) => {
    event.stopPropagation();
    setIsSongPlaying(false);
  };

  return (
    <Fragment>
      {lists.map(({ title, artistName }, idx) => (
        <Row
          key={idx}
          idx={idx}
          title={title}
          isSelected={selectedRowId === idx}
          artistName={artistName}
          playBtnHandler={playBtnHandler}
          pauseBtnHandler={pauseBtnHandler}
          isPlaying={selectedRowId === idx ? isSongPlaying : false}
        />
      ))}
    </Fragment>
  );
};

export default SongRows;
