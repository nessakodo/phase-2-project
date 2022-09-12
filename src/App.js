import React from "react";
import { NavLink } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* insert header component here */}
      </header>
      <div className="navigation">
        {/* insert navigation components below as NavLinks */}

      <NavLink className="button" to="/about">
        Profile
      </NavLink>

      <NavLink className="button" to="/about">
        Forecast
      </NavLink>

      <NavLink className="button" to="/about">
        Races
      </NavLink>


    </div>
    </div>
  );
}

export default App;
