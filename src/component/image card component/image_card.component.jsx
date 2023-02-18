import "./image_card.styles.scss";
import Button from "../button/button-component";

const ImageCard = ({ ImageUrl, text, supervisor }) => {
  return (
    <div className="image-card">
      <div className="card-image-container">
        <div
          className="image"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)), url(${ImageUrl} )`,
          }}
        >
          {" "}
          <h1 className="image-text">
            {text}
            <p>supervisor: {supervisor}</p>
          </h1>
        </div>

        <Button path="/" className="round-button" symbol="&rarr;">
          Learn more
        </Button>
      </div>
    </div>
  );
};
export default ImageCard;
