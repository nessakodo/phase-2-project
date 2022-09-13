import React from "react";
import CitiesForm from "./CitiesForm"
import CitiesList from "./CitiesList"
// import ForecastPage from "./ForecastPage";


export default function HomePage( {weather} ) {
   if (weather.currentConditions !== undefined) {
      console.log(weather)

   

      const weatherCard = (
         <div>
            <p>comment: {weather.currentConditions.comment} </p>
            <p>dayhour: {weather.currentConditions.dayhour} </p>
            <p>humidity: {weather.currentConditions.humidity}</p>

            <img 
               src={weather.currentConditions.iconURL} 
               alt={weather.currentConditions.comment} />


            <p>precip: {weather.currentConditions.precip}</p>
            <p>temp: {weather.currentConditions["temp"]["f"]}°F</p>
            <p>wind: {weather.currentConditions["wind"]["mile"]}mph </p>

         </div>
      )

      return (
         <div>
            <CitiesForm />
            <CitiesList />
            {weatherCard}
   
            <h1>hello i am the home page!!!</h1>
   
         </div>
    )}
   
   
   return (
      <p>no data</p>

   )}

   // console.log(currentTemp)


