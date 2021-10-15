import styled from "styled-components";

const Button = ({
  id,
  style,
  className,
  onClick,
  isPrimaryBtn = false,
  iconId,
  svgClassName,
}) => {
  return (
    <ControlButton
      style={style}
      className={className}
      onClick={onClick}
      key={id}
      isPrimary={isPrimaryBtn}
    >
      <svg className={svgClassName}>
        <use href={`icons/sprite.svg#${iconId}`}></use>
      </svg>
    </ControlButton>
  );
};

export default Button;

const ControlButton = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  box-shadow: -2px -2px 20px 1px var(--color-white);
  border: 3px solid var(--color-black-dark);
  transition: all 0.1s;
  align-self: center;
  justify-self: center;
  background-color: ${(props) =>
    props.isPrimary ? `var(--color-primary)` : `var(--color-black-light)`};

  &:hover {
    cursor: pointer;
  }

  & svg {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    pointer-events: none;
    fill: ${(props) => (props.isPrimary ? `#ffffff` : `var(--color-white)`)};
  }
`;
