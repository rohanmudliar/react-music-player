import { Fragment } from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <Fragment>
      <div className="playing__container-slider">
        <div id="slider__normalLine" className="slider__normalLine"></div>
        <div id="slider__dot" className="slider__dot"></div>
        <div id="slider__gradLine" className="slider__gradLine"></div>
      </div>

      <div
        id="playing__container-transparentLine"
        className="playing__container-transparentLine hoverPointer"
      ></div>
    </Fragment>
  );
};

export default Slider;
