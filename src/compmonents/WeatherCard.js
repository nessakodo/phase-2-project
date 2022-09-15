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
          <div>
            <h2>Enter a City:</h2>
            <CityForm
              onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
            />
            <RenderCard
                weather={weatherData}
            />
          </div> 
  );
}
