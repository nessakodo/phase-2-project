import React from "react";

export default function HomePage( {weather} ) {
   if (weather.currentConditions !== undefined) {
    console.log(weather)
      const weatherCard = (
         <div>
            <p>comment: {weather.currentConditions.comment} </p>
            <p>dayhour: {weather.currentConditions.dayhour} </p>
            <p>humidity: {weather.currentConditions.humidity}</p>
            <p>iconUrl: {weather.currentConditions.iconUrl}</p>
            <p>precip: {weather.currentConditions.precip}</p>
            <p>temp: {weather.currentcurrentConditions}</p>
            <p>wind: {weather.currentContitions}</p>
            {/* <p>tomorrow: {weather.next_days[0]}</p> */}
         </div>
      )

      return (
         <div>
            {weatherCard}
            <h1>hello i am the home page</h1>
         </div>
    )}
   
   
   return (
      <p>no data</p>

   )}