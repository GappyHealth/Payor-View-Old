import { React } from "react";
import { NavLink, Link } from "react-router-dom";

// Assets
import logo from "../assets/gappy.png";

const NavBar = (props) => {
  const { handleLogout } = props;

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <Link class="navbar-brand" to="/home">
          gappy
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <NavLink className="nav-item nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/profile">
              Profile
            </NavLink>
            <NavLink className="nav-item nav-link" to="/providers">
              History
            </NavLink>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger btn-sm ml-5"
                  to="/home"
                >
                  Sign Out
                </button>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
