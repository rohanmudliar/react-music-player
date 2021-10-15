import { useContext } from "react";
import styled from "styled-components";

import Controls from "./Controls";
import Thumbnail from "../component/Thumbnail";
import Button from "../component/Button";
import Timer from "../component/Timer";
import Slider from "../component/Slider";

import PlayerStateContext from "../store/PlayerStateContext";

const Player = ({
  navBtnClick,
  className,
  replayHandler,
  timers,
  audioObj,
}) => {
  const {
    currentSelectedSong,
    isSongPlaying,
    setIsSongPlaying,
    songsList,
    selectedRowId,
    setCurrentRowId,
    sliderVal,
  } = useContext(PlayerStateContext);

  const playPauseHandler = () => {
    setIsSongPlaying((previousState) => !previousState);
  };

  const previousBtnHandler = () => {
    if (audioObj.currentTime < 3) {
      if (selectedRowId === 0) {
        setCurrentRowId(songsList.length - 1);
      } else {
        setCurrentRowId((previousId) => previousId - 1);
      }
    } else {
      setCurrentRowId((previousId) => previousId);
      replayHandler();
    }
  };

  const nextBtnHandler = () => {
    if (selectedRowId === songsList.length - 1) {
      setCurrentRowId(0);
    } else {
      setCurrentRowId((previousId) => previousId + 1);
    }
  };

  const imgName = currentSelectedSong.thumbnail
    ? currentSelectedSong.thumbnail
    : "default.jpg";

  const menuBtn = {
    width: "4rem",
    height: "4rem",
    gridColumn: "4 / span 1",
    gridRow: "2 / span 1",
  };

  const thumbnail = {
    gridColumn: "2 / span 3",
    gridRow: "4 / span 1",
    width: "200px",
    height: "100%",
    backgroundSize: "contain",
    transform: "none",
  };

  return (
    <div className={`player ${className}`}>
      <Container className="player__container">
        <Button style={menuBtn} iconId="icon-menu" onClick={navBtnClick} />

        <Heading>
          <p>Playing Now</p>
        </Heading>

        <Thumbnail
          style={thumbnail}
          imgSrc={`images/${imgName}`}
          defaultName="default"
        />

        <SongTitle>
          <p>{currentSelectedSong.title}</p>
        </SongTitle>

        <ArtistName>
          <p>{currentSelectedSong.artistName}</p>
        </ArtistName>

        <Timer
          currentTime={timers.currentTime}
          durationTime={timers.duration}
        />

        <Slider dotLeft={sliderVal.dotLeftVal} />

        <Controls
          isSongPlaying={isSongPlaying}
          playPauseHandler={playPauseHandler}
          previousBtnHandler={previousBtnHandler}
          nextBtnHandler={nextBtnHandler}
        />
      </Container>
    </div>
  );
};

export default Player;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2rem 3rem 1fr 3rem 2rem;
  grid-template-rows: 2rem 2.5rem 1rem 1fr 3rem 3rem 1rem 1rem 8rem 2rem;
  grid-gap: 1rem;
`;

const Heading = styled.div`
  grid-column: 3 / span 1;
  grid-row: 3 / span 1;
  justify-self: center;
  align-self: center;

  & p {
    font-size: 1.2rem;
    color: rgb(211, 210, 210);
  }
`;

const SongTitle = styled.div`
  grid-column: 2 / span 3;
  grid-row: 5 / span 1;
  justify-self: center;
  align-self: center;
  color: rgb(231, 231, 231);
  font-weight: bold;
  letter-spacing: 1.5px;

  & p {
    font-size: 2rem;
  }
`;

const ArtistName = styled.div`
  grid-column: 2 / span 3;
  grid-row: 6 / span 1;
  justify-self: center;
  align-self: flex-start;
  font-size: 1.2rem;
  color: rgb(231, 231, 231);
`;
