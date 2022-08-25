import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/LogoPwC.png";
import { UserContext } from "../../context/UserContext";
import "./navbar.css";
import swal from "sweetalert";

export const NavBar = () => {
  const navigate = useNavigate();
  const { isloggin, logged } = useContext(UserContext);
  const logout = () => {
    logged();
    navigate("/");
    swal("Good Bye!", "See you later", "info");
  };
  const login = () => {
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">
      <Link className="navbar-brand" to="#">
        <img className="logoNav" src={logo} alt="logo" />
      </Link>
      {!isloggin && (
        <>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end mx-5">
            <ul className="navbar-nav ml-auto">
              <span className="nav-link nav-item text-primary"></span>
              <button onClick={login} className="nav-link nav-item btn_nav">
                Login
              </button>
            </ul>
          </div>
        </>
      )}
      {isloggin && (
        <>
          <div className="navbar-collapse center_nav">
            <div className="navbar-nav ">
              <NavLink
                className={({ isActive }) =>
                  `nav-link nav-item  ${isActive ? "active" : ""}`
                }
                to="/table"
              >
                Table
              </NavLink>

              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link nav-item  ${isActive ? "active" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </div>
          </div>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end mx-5">
            <ul className="navbar-nav ml-auto">
              <span className="nav-link nav-item text-primary"></span>
              <button onClick={logout} className="nav-link nav-item btn_nav">
                Logout
              </button>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};
