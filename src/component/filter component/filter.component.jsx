import "./filter.style.scss";
import { Link } from "react-router-dom";
const Filter = ({ filterArray }) => {
  return (
    <div className="filter-container">
      {filterArray.map((filter) => {
        return (
          <div className="select">
            <select path="#" className="multi-select select--multiple">
              <option>{filter.text}</option>
              {filter.dropDownItem.map((item) => {
                return <option className="drop-down-item">{item}</option>;
              })}
            </select>
          </div>
        );
      })}
    </div>
  );
};
export default Filter;
