import React from 'react';
import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";



const linkStyles = {
    background: "rgba(16, 170, 170, 0.271)",
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    width: "80px",
    textDecoration: "none",
    color: "white",
    textAlign: "center",
    borderRadius: "30px",
    marginBottom: "10px",
    fontSize: "medium",
    boxShadow: "0 4px 8px rgb(10 22 70 / 15%)",
  }
  
export default function NavBar ()  {
  return (
    <React.Fragment>
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
          img src={home} 
        >  Home
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/cities"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
        >
          My Cities
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
        >
          About
        </NavLink>
      </div>
    </React.Fragment>
  );
}
