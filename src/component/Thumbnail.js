import styled from "styled-components";

const Thumbnail = ({
  className,
  style,
  imgSrc,
  defaultName,
  onClick,
  addHover = false,
}) => {
  return (
    <Container
      className={className}
      onClick={onClick}
      addHover={addHover}
      style={style}
    >
      <img src={imgSrc} alt={defaultName} />
    </Container>
  );
};

export default Thumbnail;

const Container = styled.div`
  text-align: center;
  border: 0.5rem solid var(--color-black-dark);
  overflow: hidden;
  justify-self: center;
  box-shadow: -2px -2px 20px 1px var(--color-white);
  border-radius: 50%;
  transform: scale(0.9);
  transition: all 0.2s;

  & > img {
    width: 100%;
  }

  ${(props) =>
    props.addHover
      ? `&:hover {
    cursor: pointer;
    transform: scale(1);
    box-shadow: -2px -2px 10px 10px var(--color-white);
  }`
      : null}
`;
