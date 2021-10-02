import Button from "./Button";
import "./Controls.css";

const Controls = () => {
  return (
    <div className="playing__container-controls">
      <Button
        id="playing__container-previousBtn"
        className="playing__container-previousBtn"
        iconId="icon-controller-jump-to-start"
      />

      <Button
        id="playing__container-playBtn"
        className="playing__container-playBtn"
        iconId="icon-controller-play"
      />

      <Button
        id="playing__container-pauseBtn"
        className="playing__container-pauseBtn hidden"
        iconId="icon-controller-paus"
      />

      <Button
        id="playing__container-nextBtn"
        className="playing__container-nextBtn"
        iconId="icon-controller-next"
      />
    </div>
  );
};

export default Controls;
