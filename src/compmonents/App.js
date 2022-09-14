import React from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
import CityForm from "./CityForm";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";


import AboutPage from "./AboutPage"
import RenderCard from "./RenderCard";
import WeatherCard from "./WeatherCard"
import ProfileCard from "./ProfileCard"

import "../index.css"


export default function App() {


  

 return (
    
    <div>
      <Header />
      <Switch>
      <Route exact path="/">
          <CityForm />
          <WeatherCard />
          <RenderCard />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/login">
          <ProfileCard />
        </Route>
    
  </Switch>
  </div>
  
  );
}
