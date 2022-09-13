import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid";
import Header from "./Header";
import RenderCard from "./RenderCard";
import "../index.css"
import CityForm from "./CityForm";


export default function App() {
  
  const [ weatherData, setWeatherData ] = useState({});
  const [ allWxData, setAllWxData] = useState([])
  const [ cityList, setCityList ] = useState([])
  const [currentCity, setCurrentCity] = useState('')
  
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
    <div className="App">
      <header className="header">
        <Header />
        <CityForm
          onFreshCityListDrama={(freshCity)=>setCityList([...cityList, freshCity])}
          onFreshCityDrama={(freshCity) => setCurrentCity(freshCity)}
        />
        {allWxData.map((eachCity) =>
          <RenderCard
            key={uuid()}
            weather={eachCity}
          />
        )}
      </header>
    </div>
  );
}
