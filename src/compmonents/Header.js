import React from "react";
import NavBar from "./NavBar";

export default function Header() {



  return (
    
    <div className="login" >
    <header>
      <h1>
      What's The Weather Like Today? 
      <br/>
        <span className="logo" role="img">🌄❄️☔🌞</span>
      </h1>
      <div>
      <NavBar />
    </div>
    </header>
    </div>
  );
}
