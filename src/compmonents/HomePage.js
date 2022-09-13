import React from "react";

export default function HomePage( {weather} ) {
   if (weather.currentConditions !== undefined) {

      //console.log(weather)

      let weatherCard = (
         <div>
            <img src={weather.currentConditions.iconURL} alt={"yeah dude"}/>
            <h3>City: {weather.region}</h3>
            <p>comment: {weather.currentConditions.comment} </p>
            <p>Date: {weather.currentConditions.dayhour} </p>
            <p>humidity: {weather.currentConditions.humidity}</p>
            <p>precip: {weather.currentConditions.precip}</p>
            <p>temp: {weather.currentConditions['temp']['f']} degrees F</p>
            <p>wind: {weather.currentConditions['wind']['mile']} mph</p>
            
         </div>
      )

      return (
         <div>
            {weatherCard}
         </div>
    )}
   
   
   return (
      <p>loading...</p>

   )}

   // <p>temp: {weather.currentcurrentConditions}</p>
   // <p>wind: {weather.currentContitions}</p>
   // {/* <p>tomorrow: {weather.next_days[0]}</p> */}