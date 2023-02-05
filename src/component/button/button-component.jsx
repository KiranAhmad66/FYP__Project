import "./button.style.scss";

import { Link } from "react-router-dom";
import { Fragment } from "react";

const Button = ({ children, path, className, symbol = null }) => {
  return (
    <Fragment>
      <Link className={className} to={path}>
        {children} {symbol}
        {className === "Explore-text" ? (
          <span className="fa fa-caret-down icon" />
        ) : null}
      </Link>
    </Fragment>
  );
};
export default Button;
