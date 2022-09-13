import React from "react";
import CitiesForm from "./CitiesForm"
import CitiesList from "./CitiesList"
import ForecastPage from "./ForecastPage";



export default function HomePage( {weather} ) {
   if (weather.currentConditions !== undefined) {
      console.log(weather)

   const comment = weather.currentConditions.comment
   const dayhour = weather.currentConditions.dayhour
   const humidity = weather.currentConditions.humidity
   const precip = weather.currentConditions.precip
   const temp = weather.currentConditions["temp"]["f"]
   const wind = weather.currentConditions["wind"]["mile"]



      const weatherCard = (


         <div>
            <img 
               src={weather.currentConditions.iconURL} 
               alt={weather.currentConditions.comment} 
            />
            
            <p>comment: {comment} </p>
            <p>dayhour: {dayhour} </p>
            <p>humidity: {humidity}</p>
            <p>precip: {precip}</p>
            
            <p>temp: {temp}°F</p>
            <p>wind: {wind}mph </p>

         </div>
      )

      



         // const clothingCard = (

         //    <div>
         //        <p>{weather.currentConditions["temp"]["f"] > 70 ? "wear a hat" : "wear shorts"}</p>
         //    </div>




         // )

      return (
         <div>
            <CitiesForm />
            <CitiesList />
            {weatherCard}
            <h4>clothing card:</h4>
            <ForecastPage />
         

            {/* <h4>Clothing Suggestions</h4>
            {clothingCard}
    */}
            <h1>hello i am the home page!!!</h1>
   
         </div>
    )}
   
   
   return (
      <div>

      
      <p>loading...</p>
      </div>

   )}

   // console.log(currentTemp)


