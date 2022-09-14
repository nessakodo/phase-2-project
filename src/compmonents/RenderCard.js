import React, {useState} from "react";
import ClothingLogic from "./ClothingLogic";



export default function RenderCard( {weather} ) {
   
   const [isClicked, setIsClicked] = useState(false)
   
   if (weather.currentConditions !== undefined) {
   const comment = weather.currentConditions.comment
   const dayhour = weather.currentConditions.dayhour
   const humidity = weather.currentConditions.humidity
   const precip = weather.currentConditions.precip
   const temp = parseInt(weather.currentConditions["temp"]["f"])
   const wind = weather.currentConditions["wind"]["mile"]
      const weatherCardFront = (
         <div>
            <h2>City: {weather.region}</h2>
               <img
                  src={weather.currentConditions.iconURL}
                  alt={weather.currentConditions.comment}
               />
               <p>{comment} </p>
               <p>{dayhour} </p>
               <p>temp: {temp}°F</p>
            </div>
      )
      const weatherCardBack = (
         <div>
               <h4>Clothing Suggestion:</h4>
               <ClothingLogic
                  weather={weather}
               />
               <p>temp: {temp}°F</p>
               <p>humidity: {humidity}</p>
               <p>precip: {precip}</p>
               <p>wind: {wind}mph </p>
         </div>

      )
      return (
         <div onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? weatherCardBack : weatherCardFront}
         </div>
    );
   }
   return (
      <></>
   );
}













