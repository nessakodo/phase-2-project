import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
// import NavBar from "./NavBar";


import "../index.css"




export default function App() {
  const [ weatherData, setWeatherData ] = useState({});
  

  
const location = "denver"

useEffect(() => {
fetch(` https://weatherdbi.herokuapp.com/data/weather/${location}`)
    .then(res => res.json())
    .then(setWeatherData);
}, []);






  return (
    <div className="App">
      <header className="header">
        <Header />
        <HomePage weather={weatherData}/>
      </header>
    </div>
  );
}





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

