import React from "react";
import Header from "./Header"
import NavBar from "./NavBar";

import "../index.css"

const location = "denver"
fetch(` https://weatherdbi.herokuapp.com/data/weather/${location}`)
    .then(res => res.json())
    .then(data => console.log(data))

const data = data
console.log(data)

  



export default function App() {


  

  return (
    <div className="App">
      <header className="header">
        <Header />
        <NavBar />
      </header>
    </div>
  );
}





// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Home"
// import NavBar from "./NavBar";
// import Profile from "./Profile";
// import Forecast from "./Forecast";
// import Races from "./Races";

// export default function App() {
//     const [page, setPage] = useState("/")
    
//     return (
//         <div>
//             <NavBar onChangePage={setPage} />
//             <Routes>
//                 <Route path="/home">
//                   Home
//                     <Home />
//                 </Route>
//                 <Route path="/profile">
//                   Profile
//                     <Profile />
//                 </Route>
//                 <Route path="/forecast">
//                   Forcast
//                     <Forecast />
//                 </Route>
//                 <Route exact path="/races">
//                   Races
//                     <Races />
//                 </Route>
//                 <Route path="*">
//                     <h1>404 not found</h1>
//                 </Route>
//             </Routes>
//         </div>
//     );
// }

