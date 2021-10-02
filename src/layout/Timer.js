import "./Timer.css";
const Timer = () => {
  return (
    <div className="playing__container-timers">
      <div
        id="playing__container-currentPlayingTime"
        className="playing__container-currentPlayingTime"
      >
        <p></p>
      </div>
      <div
        id="playing__container-durationTime"
        className="playing__container-durationTime"
      >
        <p></p>
      </div>
    </div>
  );
};

export default Timer;
