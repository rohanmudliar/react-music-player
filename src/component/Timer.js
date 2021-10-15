import styled from "styled-components";

const Timer = ({ currentTime, durationTime }) => {
  return (
    <Container>
      <div>
        <p>{currentTime}</p>
      </div>
      <div className="durationTime">
        <p>{durationTime}</p>
      </div>
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  grid-column: 2 / span 3;
  grid-row: 7 / span 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  color: rgb(188, 188, 188);

  & .durationTime {
    justify-self: flex-end;
  }
`;
