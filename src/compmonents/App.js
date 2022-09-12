import React from "react";
import NavBar from "./NavBar"
// import { NavLink } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* insert header component here */}
      </header>
      <div className="navigation">
        <NavBar />

          {/* <NavLink className="button" to="/about">
            Profile
          </NavLink>

          <NavLink className="button" to="/about">
            Forecast
          </NavLink>

          <NavLink className="button" to="/about">
            Races
          </NavLink> */}

      </div>
    </div>
  );
}

export default App;
