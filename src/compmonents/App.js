import React, { useState } from "react"
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

import WeatherCard from "./WeatherCard"
import AboutPage from "./AboutPage"
import ProfileCard from "./ProfileCard"
import UserCityCollection from "./UserCityCollection"

import "../index.css"


export default function App() {


// all users -> probs don't need unless taking login to the next level (might be useful for the catch)
const [ users, setUsers ] = useState([]);

// most recent user
const [currentUser, setCurrentUser ] = useState('')

// list of all of CURRENT USER'S of user's cities
const [ cityList, setCityList ] = useState([])

const [hasLoggedIn, setHasLoggedIn] = useState(false)

 
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
        <ProfileCard 
            onAddUser={(newUser)=>setUsers([...users, newUser])}
            onCurrentUser={(newUser)=>setCurrentUser(newUser)}
            currentUser={currentUser}
            onAddUserCities={(freshCity)=>setCityList([...cityList, freshCity])}
            cityList={cityList}
            onHasLoggedIn={() => setHasLoggedIn(true)}
            hasLoggedIn={hasLoggedIn}
        />
    </Route>
    <Route exact path="/cities">
        <UserCityCollection
            currentUser={currentUser}
            cityList={cityList}
        />
    </Route>

</Switch>
</div>

);
}