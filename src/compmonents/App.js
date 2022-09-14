import React from "react"
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

import WeatherCard from "./WeatherCard"
import AboutPage from "./AboutPage"
import ProfileCard from "./ProfileCard"

import "../index.css"


export default function App() {
<<<<<<< HEAD
  
  // wx data for one city
  const [ weatherData, setWeatherData ] = useState({});

  // wx data for all searched locations
  const [ allWxData, setAllWxData] = useState([])

  // list of all locations searched
  const [ cityList, setCityList ] = useState([])

  // most recent city that was searched
  const [ currentCity, setCurrentCity ] = useState('')

  // all users
  const [ users, setUsers ] = useState([]);

  // most recent user
  const [currentUser, setCurrentUser ] = useState('')
  
  useEffect(() => {
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${currentCity}`)
        .then(res => res.json())
        .then(setWeatherData)
    }, [currentCity]);

  useEffect(() => {
    setAllWxData([...allWxData, weatherData])
  }, [weatherData]);
  if (cityList.length === 0) {
    allWxData.shift()
  }

  return (
    <div className="App">
      <header className="header">
        <Header 
          onAddUser={(newUser)=>setUsers([...users, newUser])}
          onCurrentUser={(newUser)=>setCurrentUser(newUser)}
        />
          <div>
            <h2>Enter a City:</h2>
            <CityForm
              onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])}
              onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
              currentUser={currentUser}
              cityList={cityList}
            />
            {allWxData.map((eachCity) =>
              <RenderCard
                key={uuid()}
                weather={eachCity}
              />
            )}
          </div> 
      </header>
    </div>
  );
}



=======

 
 return (
    
    <div>
      <Header />
      <Switch>
      <Route exact path="/">
          <WeatherCard />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/profile">
          <ProfileCard />
        </Route>
    
  </Switch>
  </div>
  
  );
}
>>>>>>> nessa
