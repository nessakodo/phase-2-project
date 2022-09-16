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
            <h2>{weather.region}</h2>
               <p>{dayhour} </p>
               <img
                  src={weather.currentConditions.iconURL}
                  alt={weather.currentConditions.comment}
               />
               <p>{comment} </p>
               <p>{temp}°F</p>
               <p>Humidity: {humidity}</p>
               <p>Chance of Precipitation: {precip}</p>
               <p>Wind: {wind} mph </p>
               <button className="switch"> View your recommended outfit</button>
            </div>
      )
      const weatherCardBack = (
         <div>
               <h2>What should you wear for your run today?</h2>
               <ClothingLogic weather={weather}/>
               {/* <h2>{weather.region}</h2>
               <p>{dayhour} </p>
               <img
                  src={weather.currentConditions.iconURL}
                  alt={weather.currentConditions.comment}
               />
               <p>{comment} </p>
               <p>{temp}°F</p>
               <p>Humidity: {humidity}</p>
               <p>Chance of Precipitation: {precip}</p>
               <p>Wind: {wind} mph </p> */}
               <br></br>
               <button className="switch"> View the current weather conditions</button>
         </div>

      )
      return (
         <div className="panel weather-card" onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? weatherCardBack : weatherCardFront}
         </div>
    );
   }
   return (
      <></>
   );
}













