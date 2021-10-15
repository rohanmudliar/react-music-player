import styled from "styled-components";

const Slider = ({ dotLeft }) => {
  return (
    <Container>
      <NormalLine />
      <Dot style={{ left: `${dotLeft}px` }} />
      <GradLine style={{ width: `${dotLeft}px` }} />
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  grid-column: 2 / span 3;
  grid-row: 8 / span 1;
  position: relative;
`;

const NormalLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: #050606;
  box-shadow: 1px 1px 1px 0px rgb(73, 73, 73);
  border-radius: 3px;
  overflow: hidden;
`;

const Dot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: radial-gradient(white, var(--color-primary), white);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0%;
  transform: translate(-50%, -27%);
  z-index: 2;
`;

const GradLine = styled.div`
  width: 0%;
  height: 4px;
  background-color: var(--color-primary);
  position: absolute;
  top: 10%;
  left: 0%;
  border-radius: 3px;
`;
