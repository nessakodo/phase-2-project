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
    <div>
      <h2>Please Enter Your Name to Login:</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <label>
          <input 
          type="text" 
          name="username" 
          onChange={handleChange}/>
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

// import React, { useState } from "react";


// export default function Login({onAddUser} ) {
// const [ userData, setUserData ] = useState({
//   username: '',
//   cities: [],
// });

//   function handleChange(e) {
//     setUserData({
//         ...userData, [e.target.name]: e.target.value,
//       });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const newUser = {
//       username: userData.username,
//       cities: [userData.cities],
//       }

//       fetch("http://localhost:4000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       })
//         .then((r) => r.json())
//         .then((newUser) => onAddUser(newUser));

    
//         document.getElementById("login-form").reset();
  
    
//   };

//   //change port for what works on your terminal :)

//   return (
//     <div>
//       <h1>Login</h1>
//       <form id="login-form" onSubmit={handleSubmit}>
//         <label>
//           <input 
//           type="text" 
//           name="username" 
//           onChange={handleChange}/>
//         </label>
//         <input type="submit" value="Login"/>
        
//       </form>
//     </div>
//   );
// }