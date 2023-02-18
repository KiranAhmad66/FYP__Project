import Paragraph from "../../component/Paragraph component/paragraph.component";
import "./impact.style.scss";
import Table from "../../component/Table component/table.component";
import ImpactData from "./impactData";
import Button from "../../component/button/button-component";
import { Fragment } from "react";
const Impact = () => {
  const impactText = [
    {
      para: "Here impact can b define as the global effect that research/ Project has on society, culture, enviroment, and economy. It cannot be measured easily by only publishing a research or Qualified your FYP and get certification.Furthermore, only publishing a research paper is no longer relevant in the research field, garnerung citations to the published work is important too. In same way, Final Year project should shpw demonstrable contribution to society and the industry (economy).",
    },
    {
      para: "We believe that Co-productive forms of Research / Projects offer high potential for academic, economic and social impact. It’s research that you carry out eith people - rather than on them - in a collaborative, interative process of shared learning.We encourage such approch, which can include working with people in community, with industry.",
    },
    {
      para: "Rearch/ Projects qualification for this section has very simple yardstick. All the FYP work will get space in this section, if is qualified or used by Industry or Society. Please find below the Work on our Students:",
    },
  ];
  return (
    <div className="impact-container">
      <div className="impact-text">
        {impactText.map((paragraph) => {
          return <Paragraph text={paragraph.para} />;
        })}
      </div>
      <div className="impact-table">
        {ImpactData.map((data) => {
          return (
            <div className="impact-table-detail">
              <Table
                date={data.date}
                Auther={data.Auther}
                paragraph={data.paragraph}
              />
              <Button path="/" className="rectangle-button impact-button">
                Detail
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Impact;
