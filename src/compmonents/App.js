import React from "react";
import NavBar from "./NavBar";

import "../index.css"

export default function App() {
  return (
    <div className="App">
      <header className="navbar">
        <NavBar />
      </header>
    </div>
  );
}



// import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Profile from "./Profile";
// import Forecast from "./Forecast";
// import Races from "./Races";

// export default function App() {
//     const [page, setPage] = useState("/")
    
//     return (
//         <div>
//             <NavBar onChangePage={setPage} />
//             <Switch>
//                 <Route path="/home">
//                     <Home />
//                 </Route>
//                 <Route path="/profile">
//                     <Profile />
//                 </Route>
//                 <Route path="/forecast">
//                     <Forecast />
//                 </Route>
//                 <Route exact path="/races">
//                     <Races />
//                 </Route>
//                 <Route path="*">
//                     <h1>404 not found</h1>
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

