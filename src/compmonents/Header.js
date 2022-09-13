import React from "react";
import Login from "./Login"

export default function Header() {
  return (
    
    <div className="login" >
    <header>
      <h1>
      What's The Weather Like Today? 
      <br/>
        <span className="logo" role="img">
       🌄❄️☔🌞
        </span>
      </h1>
      <h5><Login /></h5>
    </header>
    </div>
  );
}

