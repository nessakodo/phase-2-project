import React from "react";
import NavBar from "./NavBar";

<<<<<<< HEAD
export default function Header({ onAddUser, onCurrentUser }) {
=======
export default function Header() {

>>>>>>> nessa

  return (
    
    <div className="login" >
    <header>
      <h1>
      What's The Weather Like Today? 
      <br/>
        <span className="logo" role="img">🌄❄️☔🌞</span>
      </h1>
      <div>
<<<<<<< HEAD
          <Login 
            onAddUser={onAddUser}
            onCurrentUser={onCurrentUser} 
          />
=======
      <NavBar />
>>>>>>> nessa
    </div>
    </header>
    </div>
  );
}
