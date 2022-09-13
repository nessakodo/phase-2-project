import createRoot from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from "./Header"
import NavBar from "./NavBar";

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import AboutPage from "./AboutPage";


import "../index.css"




export default function App() {

  
const location = "denver"
fetch(` https://weatherdbi.herokuapp.com/data/weather/${location}`)
    .then(res => res.json())
    .then(json => console.log(json));



   return (
      <BrowserRouter>

    <div className="App">
      <header className="header">
        <Header />

        
        <NavBar />
            <Routes>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
          </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);




// import React, { useState } from "react";
// import { BrowserRouter, Route} from "react-router-dom";
// import Home from "./Home"
// import NavBar from "./NavBar";
// import Profile from "./Profile";
// import Forecast from "./Forecast";
// import Races from "./Races";

    
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

