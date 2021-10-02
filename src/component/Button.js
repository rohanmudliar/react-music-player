import "./Button.css";

const Button = (props) => {
  return (
    <div id={props.id} className={`controlButton ${props.className}`}>
      <svg>
        <use href={`icons/sprite.svg#${props.iconId}`}></use>
      </svg>
    </div>
  );
};

export default Button;
