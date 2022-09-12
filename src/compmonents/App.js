import React from "react";
import NavBar from "./NavBar";

import "../index.css"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* insert header component here */}
      </header>
      <div className="navigation">
        <NavBar />
      </div>
    </div>
  );
}

