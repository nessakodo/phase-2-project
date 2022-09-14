import React from "react"
import { Switch, Route } from "react-router-dom";

import Header from "./Header";

import WeatherCard from "./WeatherCard"
import AboutPage from "./AboutPage"
import ProfileCard from "./ProfileCard"

import "../index.css"


export default function App() {

 
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
