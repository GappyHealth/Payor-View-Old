import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  const { handleLogout } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white mb-2">
      <Link className="navbar-brand" to="/">
        Gappy
      </Link>

      <div className="navbar-nav ml-auto">
        <NavLink className="nav-item nav-link" to="/home">
          Dashboard
        </NavLink>
        <NavLink className="nav-item nav-link" to="/gaps">
          Measures
        </NavLink>
        <NavLink className="nav-item nav-link" to="/practices">
          Practices
        </NavLink>
        <NavLink className="nav-item nav-link" to="/providers">
          Providers
        </NavLink>
        <button
          onClick={handleLogout}
          className="btn btn-danger btn-sm ml-5"
          to="/home"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
