import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import Header from "./Header";
import RenderCard from "./RenderCard";
import "../index.css"
import CityForm from "./CityForm";


export default function App() {
  const [ weatherData, setWeatherData ] = useState({});
  const [ allWxData, setAllWxData] = useState([])
  const [ cityList, setCityList ] = useState([])
  const [currentCity, setCurrentCity] = useState('')
  useEffect(() => {
    fetch(` https://weatherdbi.herokuapp.com/data/weather/${currentCity}`)
        .then(res => res.json())
        .then(setWeatherData)
    }, [currentCity]);


  useEffect(() => {
    setAllWxData([...allWxData, weatherData])
  }, [weatherData]);
  if (cityList.length === 0) {
    allWxData.shift()
  }


  console.log(currentCity)
  console.log(allWxData)
  return (
    <div className="App">
      <header className="header">
        <Header />
        <CityForm
          onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])}
          onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
        />


        {allWxData.map((eachCity) =>
          <RenderCard
            key={uuid()}
            weather={eachCity}
          />
        )}
      </header>
    </div>
  );
}








// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import HomePage from "./HomePage";
// // import NavBar from "./NavBar";


// import "../index.css"




// export default function App() {
//   const [ weatherData, setWeatherData ] = useState({});
  

  
// const location = "denver"

// useEffect(() => {
// fetch(` https://weatherdbi.herokuapp.com/data/weather/${location}`)
//     .then(res => res.json())
//     .then(setWeatherData);
// }, []);

  useEffect(() => {
    setAllWxData([...allWxData, weatherData])
  }, [weatherData]);

  if (cityList.length === 0) {
    allWxData.shift()
  }



  console.log(currentCity)
  console.log(allWxData)

<<<<<<< HEAD
  return (
    <div className="App">
      <header className="header">
        <Header />
        <CityForm
          onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])} 
          onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
        />
        {allWxData.map((eachCity) =>
          <HomePage 
            key={uuid()}
            weather={eachCity}
          />
        )}
      </header>
    </div>
  );
}


  // useEffect(() => {
  //   cityList.map((eachCity) => (
  //   fetch(` https://weatherdbi.herokuapp.com/data/weather/${eachCity}`)
  //       .then(res => res.json())
  //       .then(setWeatherData)
  //   ))
  //   }, [cityList]);
=======
//   return (
//     <div className="App">
//       <header className="header">
//         <Header />
//         <HomePage weather={weatherData}/>
//       </header>
//     </div>
//   );
// }





// // import React, { useState } from "react";
// // import { BrowserRouter, Route} from "react-router-dom";
// // import Home from "./Home"
// // import NavBar from "./NavBar";
// // import Profile from "./Profile";
// // import Forecast from "./Forecast";
// // import Races from "./Races";

    
// //     return (
// //         <div>
// //             <NavBar onChangePage={setPage} />
// //             <Routes>
// //                 <Route path="/home">
// //                   Home
// //                     <Home />
// //                 </Route>
// //                 <Route path="/profile">
// //                   Profile
// //                     <Profile />
// //                 </Route>
// //                 <Route path="/forecast">
// //                   Forcast
// //                     <Forecast />
// //                 </Route>
// //                 <Route exact path="/races">
// //                   Races
// //                     <Races />
// //                 </Route>
// //                 <Route path="*">
// //                     <h1>404 not found</h1>
// //                 </Route>
// //             </Routes>
// //         </div>
// //     );
// // }

>>>>>>> 46688c3c9799e778ffe8c53eaa3f8b07ac76d883
