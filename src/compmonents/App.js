import React, { useState } from "react"
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

import WeatherCard from "./WeatherCard"
import AboutPage from "./AboutPage"
import ProfileCard from "./ProfileCard"
import UserCityCollection from "./UserCityCollection"

import "../index.css"


export default function App() {


  // all users
  const [ users, setUsers ] = useState([]);

   // most recent user
   const [currentUser, setCurrentUser ] = useState('')
  

 
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
          currentUser={currentUser}/>
        </Route>
    
  </Switch>
  </div>
  
  );
}