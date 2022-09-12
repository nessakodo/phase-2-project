import React from 'react';
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import AboutPage from "./AboutPage";

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
          <HomePage />
        </a>
        <a href="/profile" onClick={navigate}>
          Profile
          <ProfilePage />
        </a>
        <a href="/races" onClick={navigate}>
          About
          <AboutPage />
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
