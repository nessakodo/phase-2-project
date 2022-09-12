import React from "react";
import NavBar from "./NavBar";
import Container from ".Container";

import "../index.css"

export default function App() {
  return (
    <div className="App">
      <header className="navbar">
        <NavBar />
      </header>

      <div className="container">
        <Container />
      </div>
      
    </div>
  );
}

