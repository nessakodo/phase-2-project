import React, { useState } from "react";
import Login from "./Login"

export default function Header() {
const [ user, setUser ] = useState([]);

  function handleAddUser(newUser) {
    setUser([...user, newUser])
  }

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
      <Login onAddUser={handleAddUser}/>
      <h1>hello i am the profile page</h1>
    </div>
    </header>
    </div>
  );
}

