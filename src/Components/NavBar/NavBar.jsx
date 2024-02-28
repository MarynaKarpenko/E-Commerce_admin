import React from "react";
import "./NavBar.css";
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={nav_logo} alt="logo" className="nav-logo" />
      <img src={nav_profile} alt="profile" className="nav_profile" />
    </div>
  );
};

export default NavBar;
