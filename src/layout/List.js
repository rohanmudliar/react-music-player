import { useContext } from "react";
import styled from "styled-components";

import Thumbnail from "../component/Thumbnail";
import Button from "../component/Button";
import SongRows from "./SongRows";

import PlayerStateContext from "../store/PlayerStateContext";

const List = (props) => {
  const { currentSelectedSong, songsList } = useContext(PlayerStateContext);
  const imgName = currentSelectedSong.thumbnail
    ? currentSelectedSong.thumbnail
    : "default.jpg";

  const className = `list ${props.className}`;

  const backBtn = {
    width: "4rem",
    height: "4rem",
    position: "absolute",
    top: "5%",
    left: "10%",
  };

  const thumbnail = {
    width: "50%",
    height: "28%",
    backgroundSize: "cover",
    margin: "13% auto 3rem auto",
  };

  return (
    <div className={className}>
      <div className="list__container">
        <Button
          style={backBtn}
          iconId="icon-arrow-long-left"
          svgClassName="backBtn"
          onClick={props.navBtnClick}
        />

        <Thumbnail
          style={thumbnail}
          imgSrc={`images/${imgName}`}
          defaultName="default"
          onClick={props.navBtnClick}
          addHover={true}
        />

        <ListContainer>
          <SongRows lists={songsList} />
        </ListContainer>
      </div>
    </div>
  );
};

export default List;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 45%);
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1rem;
  overflow-y: auto;
  padding-right: 0;
  box-sizing: content-box;
`;
