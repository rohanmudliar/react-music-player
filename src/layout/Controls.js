import styled from "styled-components";
import Button from "../component/Button";

const Controls = ({
  isSongPlaying,
  playPauseHandler,
  previousBtnHandler,
  nextBtnHandler,
}) => {
  const previousBtn = {
    gridColumn: "1 / span 1",
    transform: "scale(0.8)",
  };

  const playPauseBtn = {
    width: "6.5rem",
    height: "6.5rem",
  };

  const nextBtn = {
    ...previousBtn,
    gridColumn: "3 / span 1",
  };

  return (
    <Container>
      <Button
        style={previousBtn}
        iconId="icon-controller-jump-to-start"
        onClick={previousBtnHandler}
      />

      {!isSongPlaying ? (
        <Button
          isPrimaryBtn
          style={playPauseBtn}
          iconId="icon-controller-play"
          onClick={playPauseHandler}
        />
      ) : (
        <Button
          isPrimaryBtn
          style={playPauseBtn}
          iconId="icon-controller-paus"
          onClick={playPauseHandler}
        />
      )}

      <Button
        style={nextBtn}
        iconId="icon-controller-next"
        onClick={nextBtnHandler}
      />
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  grid-column: 2 / -2;
  grid-row: 9 / span 1;
  display: grid;
  grid-template-columns: 7rem 1fr 7rem;
`;
