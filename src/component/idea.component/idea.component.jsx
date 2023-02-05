import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button-component";
import "./idea.style.scss";
const imageobj = [
  {
    id: 1,
    ImageUrl:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixid=Mnw0MDUwOTd8MHwxfHNlYXJjaHwyMXx8Y29tcHV0ZXJ8ZW58MHx8fHwxNjc1MjYzOTQy&ixlib=rb-4.0.3",
    text: "AI & Machine learning",
  },
  {
    id: 2,
    ImageUrl:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixid=Mnw0MDUwOTd8MHwxfHNlYXJjaHwxMXx8cm9ib3R8ZW58MHx8fHwxNjc1MjY0MDkz&ixlib=rb-4.0.3",
    text: "Metaverse",
  },
  {
    id: 3,
    ImageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixid=Mnw0MDUwOTd8MHwxfHNlYXJjaHw2MXx8ZmluYW5jZXxlbnwwfHx8fDE2NzUyNjQxODk&ixlib=rb-4.0.3",
    text: "Machine Learning",
  },
  {
    id: 4,
    ImageUrl:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixid=Mnw0MDUwOTd8MHwxfHNlYXJjaHw2MXx8Z2FtaW5nLWNvbXB1dGVyfGVufDB8fHx8MTY3NTI2NDUzNw&ixlib=rb-4.0.3",
    text: "Virtual Reality",
  },
];
const IdeaComponent = () => {
  const [id, setId] = useState(" ");
  const [ImageUrl, setImageUrl] = useState(" ");
  useEffect(() => {
    setId({ id: imageobj[id] });
  }, []);
  useEffect(() => {
    setImageUrl({ ImageUrl: imageobj[ImageUrl] });
  }, []);
  return (
    <div className="idea-page-container">
      <div className="ideas-container">
        <div className="ideas-title">
          <h2>IDEAS</h2>
        </div>
        <div className="ideas-paragraph">
          <p>
            IDEA's Drive version. Without idea - any efforts can't get
            desitnation. As we all knoe that FYP is pre departure stage towards
            Professional life. At this stage, we all have to allign with applied
            idea cum field w.r.t to our taste & skills
          </p>
        </div>
      </div>
      <div className="ideas-container">
        <div className="ideas-title">
          <h2>IDEA BOOK</h2>
        </div>
        <div className="idea-book-images-container">
          <div className="idea-book-images">
            {imageobj.map((img) => {
              return (
                <div key={`${img.id}`} className="image-container">
                  <div
                    className="idea-image"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)), url(${img.ImageUrl} )`,
                    }}
                  />

                  <h1 className="image-text-heading">{img.text}</h1>

                  <Button path="/" className="Learn-more" symbol="&rarr;">
                    Learn more
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="Explore-Button">
            <Button path="/" className="Explore-text">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IdeaComponent;
