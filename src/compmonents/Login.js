import React, { useState } from "react";


export default function Login({onAddUser, onCurrentUser} ) {

  const [ userData, setUserData ] = useState({
    username: '',
    cities: [],
  });

  function handleChange(e) {
    setUserData({
        ...userData, [e.target.name]: e.target.value,
      });
  }

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
        <img type="submit" value="" className="submit"/>
      </form>{!null ? 
            null : 
            <p>Not a Valid Input, Please Try Again!</p>
        }
    </div>
  );
}