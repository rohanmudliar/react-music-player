import "./Thumbnail.css";
const Thumbnail = ({ className, imgSrc, defaultName, onClick }) => {
  return (
    <div className={`thumbnail ${className}`} onClick={onClick}>
      <img src={imgSrc} alt={defaultName} />
    </div>
  );
};

export default Thumbnail;
