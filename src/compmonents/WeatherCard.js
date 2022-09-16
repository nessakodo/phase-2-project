import React, { useState, useEffect } from "react";
import CityForm from "./CityForm";
import RenderCard from "./RenderCard";


export default function WeatherCard () {

    // wx data for one city
  const [ weatherData, setWeatherData ] = useState({});

   // most recent city that was searched
  const [ currentCity, setCurrentCity ] = useState('')

    // get data for the city that was just searched
    useEffect(() => {
        fetch(`https://weatherdbi.herokuapp.com/data/weather/${currentCity}`)
            .then(res => res.json())
            .then(setWeatherData)
    }, [currentCity]);
 
  return (
    <React.Fragment>
    <div>
     <br></br><p><em>Running today? Enter the city below and find out your recommended outfit.</em></p>
      <h1>ENTER A CITY:</h1>
        <CityForm
          onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
          />
        <RenderCard
          weather={weatherData}
          />
    </div> 
        <br></br>
           <h2>Overall Running Outfit Tips:</h2>
           <div className="tips">
            <div className="tips-item"><h1>🥵🥶🌡</h1>
           A good rule of thumb when running is to dress 10 to 20˚F warmer than the outside temperature.<br></br></div>
           <div className="tips-item"><h1>👟</h1>
           Replace your shoes every 300-500 miles and buy shoes 1/2 size larger than normal, as your feet swell when running. Get some comfy socks, too - it will make all the difference!<br></br></div>
           <div className="tips-item"><h1>🎽🧦</h1>
           When selecting your running clothes, don’t wear cotton. Consider technical, dryfit clothing. </div>
           </div>
        <div class="quote">
        <p><em>"I always loved running… it was something you could do by yourself, and under your own power. You could go in any direction, fast or slow as you wanted, fighting the wind if you felt like it, seeking out new sights just on the strength of your feet and the courage of your lungs."
         <strong><br></br><br></br>- Jesse Owens, Four-time Olympic gold medalist</strong></em></p></div>
    </React.Fragment>
  );
}