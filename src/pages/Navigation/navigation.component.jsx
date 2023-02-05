import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/fyp.svg";
import { ReactComponent as KustLogo } from "../../assests/kust.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  
  return (
    <div className="navigation-page">
      <div className="menu-bar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link  className="nav-link" to="/aboutus">
            About us
          </Link>
          <Link className="nav-link" to="/ideas">
            Ideas
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-link" to="/impact">
            Impact
          </Link>
          <Link className="nav-link" to="/hiretalent">
            Hire talent
          </Link>
          <Link className="nav-link" to="/contactus">
            Contact us
          </Link>
          <Link className="nav-link" to="/authentication">
            Login
          </Link>
        </div>
        <Link className="kust-logo-container" to="/">
          <KustLogo className="kust-logo" />
        </Link>
      </div>

      <Outlet />
    </div>
  );
};
export default Navigation;
