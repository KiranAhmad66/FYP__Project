import Button from "../../component/button/button-component";
import Image_Directive from "../../component/Image Directive component/Image_Directive.component.jsx";
import Paragraph from "../../component/Paragraph component/paragraph.component";
import Title from "../../component/title component/title.component.jsx";
import "./ideapage.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Outlet, useNavigate } from "react-router-dom";
import useHistory from "use-history";
const IdeaPage = () => {
  const ideaText = {
    para: "IDEA's Drive version. Without idea - any efforts can't get desitnation. As we all knoe that FYP is pre departure stage towards  Professional life. At this stage, we all have to allign with applied idea cum field w.r.t to our taste & skills",
  };

  return (
    <div className="idea-page-container">
      <div className="ideas-text-container">
        <Title text="IDEA" />
        <Paragraph text={ideaText.para} />
        <Title text="IDEA BOOK" />
      </div>
      <div className="idea-book-images-container">
        <div className="idea-book-images">
          <Image_Directive />
        </div>
        <div className="Explore-Button">
          <Button path="/" className="Expand-button">
            Explore More
            <FontAwesomeIcon icon={faCaretDown} className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default IdeaPage;
