import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./pagination.style.scss";
const Paginations = ({
  postPerPage,
  totalPost,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(`${i}`);
  }
  return (
    <Fragment>
      <ul className="pagination">
        <li className="page-item">
          <Link to="#" onClick={previousPage} className="page-link">
            Prev
          </Link>
        </li>
        {pageNumber.map((number) => {
          return (
            <li id={number} className="page-item">
              <Link
                onClick={() => paginate(number)}
                to="#"
                className="page-link"
              >
                {number}
              </Link>
            </li>
          );
        })}
        <li className="page-item">
          <Link to="#" onClick={nextPage} className="page-link">
            Next
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Paginations;
