import "./cover-image.style.scss";
const CoverImage = ({ imageUrl, text }) => {
  return (
    <div
      className="cover-img"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${imageUrl})`,
      }}
    >
      <div className="about-us-heading">{text}</div>
    </div>
  );
};
export default CoverImage;
