import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

function Navbar() {
  const { user, dispatch } = useContext(Context);
  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* TopLeft Container */}
        <div className="navbar-brand topLeft">
          <i className="topIcon fa-brands fa-facebook "></i>
          <i className="topIcon fa-brands fa-twitter "></i>
          <i className="topIcon fa-brands fa-pinterest "></i>
          <i className="topIcon fa-brands fa-instagram "></i>
        </div>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle Container */}
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <div className="middle ms-auto mt-2 mt-lg-0">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/write">
                  Write
                </NavLink>
              </li>
              <li onClick={handleClick} className="nav-item">
                <NavLink className="nav-link" to="#">
                  {user && "Logout"}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="topRight">
            {user ? (
              <img
                className="topImage"
                src="https://resizing.flixster.com/4T60BB3iXzP0Ttu9oegTjeLJ2MU=/300x300/v2/https://flxt.tmsimg.com/assets/p11408531_b1t_v8_ab.jpg"
                alt="Profile Pic"
              />
            ) : (
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    Signin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Top Right Container */}
      </div>
    </nav>
  );
}

export default Navbar;
