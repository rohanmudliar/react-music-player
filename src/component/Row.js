import styled from "styled-components";
import Button from "./Button";

function Row({
  idx,
  title,
  artistName,
  playBtnHandler,
  isSelected,
  isPlaying,
  pauseBtnHandler,
}) {
  const buttonStyle = {
    width: "2.5rem",
    height: "2.5rem",
  };

  return (
    <Container
      className={`${isSelected ? "selected" : ""}`}
      data-cardno={idx}
      onClick={playBtnHandler}
    >
      <SongInfo>
        <p>{title}</p>
        <p>{artistName}</p>
      </SongInfo>

      {!isPlaying ? (
        <Button
          isPrimaryBtn={isSelected}
          style={{ ...buttonStyle, pointerEvents: "none" }}
          iconId="icon-controller-play"
          svgClassName="list__container-playBtn"
        />
      ) : (
        <Button
          isPrimaryBtn={isSelected}
          style={buttonStyle}
          iconId="icon-controller-paus"
          svgClassName="list__container-pauseBtn"
          onClick={pauseBtnHandler}
        />
      )}
    </Container>
  );
}

export default Row;

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4rem;
  padding: 1rem 0;
  border-radius: 2rem;

  &:hover {
    background-color: var(--color-black-light);
    cursor: pointer;
  }
`;

const SongInfo = styled.div`
  color: rgb(211, 210, 210);
  padding-left: 2rem;
  pointer-events: none;

  & p:first-child {
    font-size: 1.3rem;
  }
`;
