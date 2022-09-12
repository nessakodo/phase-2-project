import React from 'react';
import Home from "./Home";
import Profile from "./Profile";
import Forecast from "./Forecast";
import Races from "./Races";

export default function NavBar() {
    function navigate(e) {
      // don't make a GET request
      e.preventDefault();
      // use pushState to navigate using the href attribute of the <a> tag
      window.history.pushState(null, "", e.target.href);
    }
  
    return (
      <nav className="navbar">
        <a href="/home" onClick={navigate}>
          Home
          <Home />
        </a>
        <a href="/profile" onClick={navigate}>
          Profile
          <Profile />
        </a>
        <a href="/forecast" onClick={navigate}>
            Forecast
          <Forecast />
        </a>
        <a href="/races" onClick={navigate}>
          Races
          <Races />
        </a>
      </nav>
    );
  }


// import React from "react";
// import { NavLink } from "react-router-dom"

// export default function NavBar() {
//     return (
//         <nav>
//             <NavLink exact to="profile/">Profile</NavLink>
//             <NavLink to="/forecast">Forecast</NavLink>
//             <NavLink to="/races">Races</NavLink>
//         </nav>
//     );
// }
