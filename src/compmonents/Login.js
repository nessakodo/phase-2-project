import React, { useState } from "react";
import check from "../assets/check-circle.svg"



export default function Login({onAddUser, onCurrentUser, onHasLoggedIn} ) {

  // state variable for form input data (just username @ this time)
  const [ userData, setUserData ] = useState({
    username: '',
    cities: [],
  });

  // updating the user's input as they type...
  function handleChange(e) {
    setUserData({
        ...userData, [e.target.name]: e.target.value,
      });
  }

  // once submit their name, posts their username//id to our json server with empty fav cities array
  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: userData.username,
      username: userData.username,
      cities: []
      }

      onCurrentUser(newUser)

      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => r.json())
        .then((newUser) => onAddUser(newUser));

        // need to add catch for if username is already taken

        onHasLoggedIn()

        document.getElementById("login-form").reset();

  };

  //change port for what works on your terminal :)

  return (
    <div id="form-container">
      <h2>Please Enter Your Name to Login:</h2>
      <form onSubmit={handleSubmit}  id="login-form">
        <label>
          <input type="text" name="username" onChange={handleChange} className="input-text"/>
        </label>
        <button type="submit" className="submit">
          <img src={check}/>
        </button>
      </form>{!null ? 
            null : 
            <p>Not a Valid Input, Please Try Again!</p>
        }
    </div>
  );
}