import styled from "styled-components";

const Button = (props) => {
  return (
    <ControlButton
      className={props.className}
      onClick={props.onClick}
      key={props.id}
    >
      <svg className={props.svgClassName}>
        <use href={`icons/sprite.svg#${props.iconId}`}></use>
      </svg>
    </ControlButton>
  );
};

export default Button;

const ControlButton = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: #111414;
  border-radius: 50%;
  box-shadow: -2px -2px 20px 1px rgb(93, 93, 93);
  border: 3px solid #050606;
  transform: scale(0.8);
  transition: all 0.1s;
  align-self: center;
  justify-self: center;

  &:hover {
    cursor: pointer;
  }

  & svg {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    fill: rgb(93, 93, 93);
    pointer-events: none;
  }
`;
