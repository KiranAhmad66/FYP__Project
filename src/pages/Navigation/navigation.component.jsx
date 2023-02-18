import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/fyp.svg";
import { ReactComponent as KustLogo } from "../../assests/kust.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <div className="navigation-page">
      <div className="menu-bar">
        <NavLink className="logo-container" to="/">
          <Logo className="logo" />
        </NavLink>
        <div className="nav-container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/aboutus"
          >
            About us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/ideas"
          >
            Ideas
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/impact"
          >
            Impact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/hiretalent"
          >
            Hire talent
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/fyp"
          >
            FYP
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/contactus"
          >
            Contact us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active_tab nav-link" : "nav-link"
            }
            to="/authentication"
          >
            Login
          </NavLink>
        </div>
        <div className="kust-logo-container">
          <NavLink className="burger-menu-bar" to="#">
            <FontAwesomeIcon icon={faBars} />
          </NavLink>
          <NavLink className="kust-logo-container" to="/">
            <KustLogo className="kust-logo" />
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
export default Navigation;
