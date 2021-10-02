import "./Thumbnail.css";
const Thumbnail = (props) => {
  const { id, className, imgSrc, defaultName } = props;
  return (
    <div id={id} className={`thumbnail ${className}`}>
      <img src={imgSrc} alt={defaultName} />
    </div>
  );
};

export default Thumbnail;
