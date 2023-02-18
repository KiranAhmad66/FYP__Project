import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./table.style.scss";
const Table = ({ date, Auther, paragraph, Supervisor }) => {
  return (
    <Fragment>
      <div className="table">
        <div className="row">
          <div className="row-item">
            <p>{date}</p>
          </div>
          <div className="row-item">
            <h5>Student: </h5>
            <div className="student-name">
              {Auther.map((auther) => {
                return <p> {auther} </p>;
              })}
            </div>
          </div>
          <div className="row-item">
            <h5 className="student-name">Supervisor: </h5>
            <p>{Supervisor}</p>
          </div>
          <div className="row-item bg-blue">
            <div className="Report-web-video">
              <Link to="/" className="project-links">
                Report
              </Link>

              <Link to="/" className="project-links">
                Web
              </Link>
              <Link to="/" className="project-links">
                Video
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <h5>Title</h5>
          </div>
          <div className="row-item">
            <p className="table-paragraph">{paragraph}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Table;
