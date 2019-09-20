import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/">
        <i className="fas fa-home"></i>
      </NavLink>
    </nav>
  );
};

export default NavMain;
