import React, { useState } from "react";
import Login from "./Login"

export default function Header({ onAddUser, onCurrentUser }) {

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
      <div>
          <Login 
            onAddUser={onAddUser}
            onCurrentUser={onCurrentUser} 
          />
    </div>
    </header>
    </div>
  );
}
