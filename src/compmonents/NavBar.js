import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
export default function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Profile
        </NavLink>
      </div>
    );
  }