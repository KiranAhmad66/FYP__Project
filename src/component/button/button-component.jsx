import "./button.style.scss";
import { Fragment } from "react";
const Button = ({ children, path, className, symbol = null, ...otherProp }) => {
  console.log(otherProp);
  return (
    <Fragment>
      {className === "round-button" || "rectangle-button" ? (
        symbol === null ? (
          <button className={className} to={path}>
            {children}
          </button>
        ) : (
          <button className={className} to={path}>
            {children} {symbol}
          </button>
        )
      ) : (
        <button className={className} to={path}>
          {children}
        </button>
      )}
    </Fragment>
  );
};
export default Button;
