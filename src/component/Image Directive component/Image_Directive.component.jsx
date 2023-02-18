import { useState, useEffect } from "react";
import "./Image_Directive.styles.scss";
import ImageCard from "../image card component/image_card.component";

const Image_Directive = () => {
  const imagesdataArray = [
    {
      id: "1",
      ImageUrl: "./images/img1.jpg",
      ImageUrlLow: "./images/imgLow1.jpg",
      ideaText: "AI & Machine learning",
      supervisor: "Dr Ayesha",
    },
    {
      id: "2",
      ImageUrl: "./images/img2.jpg",
      ImageUrlLow: "./images/imgLow2.jpg",
      ideaText: "Metaverse",
      supervisor: "Dr Ayesha",
    },
    {
      id: "3",
      ImageUrl: "./images/img3.jpg",
      ideaText: "Machine Learning",
      supervisor: "Dr Ayesha",
    },
    {
      id: "4",
      ImageUrl: "./images/img4.jpg",
      ideaText: "Virtual Reality",
      supervisor: "Dr Ayesha",
    },
  ];
  const [ImageNewArray, setImageUrl] = useState([]);
  useEffect(() => {
    const fetchData = async () => setImageUrl(imagesdataArray);
    fetchData();
  }, []);
  return (
    <div className="image-directive">
      {ImageNewArray.map((img) => {
        return (
          <ImageCard
            key={img.id}
            ImageUrl={img.ImageUrl}
            text={img.ideaText}
            supervisor={img.supervisor}
            placeholder={img.ImageUrlLow}

          />
        );
      })}
    </div>
  );
};
export default Image_Directive;
