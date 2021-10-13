import { Fragment } from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <Fragment>
      <div className="playing__container-slider">
        <div className="slider__normalLine"></div>
        <div className="slider__dot"></div>
        <div className="slider__gradLine"></div>
      </div>

      <div className="playing__container-transparentLine hoverPointer"></div>
    </Fragment>
  );
};

export default Slider;
