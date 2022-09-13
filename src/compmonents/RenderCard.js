import React from "react";
import ClothingLogic from "./ClothingLogic";



export default function RenderCard( {weather} ) {
   if (weather.currentConditions !== undefined) {
      console.log(weather)

   const comment = weather.currentConditions.comment
   const dayhour = weather.currentConditions.dayhour
   const humidity = weather.currentConditions.humidity
   const precip = weather.currentConditions.precip
   const temp = parseInt(weather.currentConditions["temp"]["f"])
   const wind = weather.currentConditions["wind"]["mile"]

console.log(temp)

      const weatherCard = (


      <div>
         <h2>City: {weather.region}</h2>
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

      return (
         <div>
            {weatherCard}
            <h4>Clothing Suggestion:</h4>
            <ClothingLogic 
            weather={weather}
            />
   
         </div>
    );
   }
   
   
   return (
      <div>
         <p>loading...</p>
      </div>
   );
}




