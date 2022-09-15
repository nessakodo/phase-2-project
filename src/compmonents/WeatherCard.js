import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import CityForm from "./CityForm";
import RenderCard from "./RenderCard";

export default function WeatherCard () {

   // wx data for one city
   const [ weatherData, setWeatherData ] = useState({});

   // wx data for all searched locations
   const [ allWxData, setAllWxData] = useState([])
 
   // list of all locations searched
   const [ cityList, setCityList ] = useState([])
 
   // most recent city that was searched
   const [ currentCity, setCurrentCity ] = useState('')
 
   
   
   useEffect(() => {
     fetch(`https://weatherdbi.herokuapp.com/data/weather/${currentCity}`)
         .then(res => res.json())
         .then(setWeatherData)
     }, [currentCity]);
 
   useEffect(() => {
     setAllWxData([...allWxData, weatherData])
   }, [weatherData]);
   if (cityList.length === 0) {
     allWxData.shift()
   }

   return (
          <div>
            <h2>Enter a City:</h2>
            <CityForm
           
              onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])}
              onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
              // currentUser={currentUser}
              cityList={cityList}
            />

            {allWxData.map((eachCity) =>
              <RenderCard
                key={uuid()}
                weather={eachCity}
              />
            )}
          </div> 
  );
}