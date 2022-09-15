import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "80px",
    padding: "10px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
  };
  
export default function NavBar() {
    return (
      <div className="navbar">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle className="links"
        >
          Home
        </NavLink>
        <NavLink className="links"
          to="/about"
          exact
          style={linkStyles}
        >
          About
        </NavLink>
        <NavLink className="links"
          to="/profile"
          exact
          style={linkStyles}
        >
          Profile
        </NavLink>
        <NavLink className="links"
          to="/cities"
          exact
          style={linkStyles}
        >
          My Cities
        </NavLink>
      </div>
    );
  }
