import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import CityForm from "./CityForm";
import ClothingLogic from "./ClothingLogic";
import RenderCard from "./RenderCard";

export default function WeatherCard () {

  const [ weatherData, setWeatherData ] = useState({});
  const [ allWxData, setAllWxData] = useState([])
  const [ cityList, setCityList ] = useState([])
  const [ currentCity, setCurrentCity ] = useState('')
  const [currentUser, setCurrentUser ] = useState('')
  
  useEffect(() => {
    fetch(` https://weatherdbi.herokuapp.com/data/weather/${currentCity}`)
        .then(res => res.json())
        .then(setWeatherData)
    }, [currentCity]);


  useEffect(() => {
    setAllWxData([...allWxData, weatherData])
  }, [weatherData]);
  if (cityList.length === 0) {
    allWxData.shift()
  }


  console.log(currentCity)
  console.log(allWxData)

  return (
    <div className="weather-card">

            <CityForm
              onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])}
              onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
              currentUser={currentUser}
              cityList={cityList}
            />
      
        {/* <CityForm
          onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])}
          onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
        /> */}


        {allWxData.map((eachCity) =>
          <RenderCard
            key={uuid()}
            weather={eachCity}
          />
        )}

    <ClothingLogic />
    </div>
  );
}