import React, {useState, useEffect} from "react";
import RenderCard from "./RenderCard";
import {v4 as uuid} from "uuid";

// renders all of the city cards of those cities
// has search bar

export default function UserCityCollection({ currentUser, cityList }) {

    // wx data for all searched locations
    const [ allWxData, setAllWxData] = useState([])

    // // wx data for one city
    // const [ weatherData, setWeatherData ] = useState({});

    if (cityList) {
        useEffect(() => {
            console.log(`wx before map: ${allWxData}`)
            cityList.map((eachCity) =>
                fetch(`https://weatherdbi.herokuapp.com/data/weather/${eachCity}`)
                    .then(res => res.json())
                    .then(data => setAllWxData([...allWxData, data]))
            )
        },[])
        console.log(allWxData)
    }

    return (
        <div>
        {cityList.length >= 1 ? 
            allWxData.map((eachCity) =>
                <RenderCard
                    key={uuid()}
                    weather={eachCity}
                />
            )
        :
        <h2>head over to the profile page to add cities to your account!</h2>
        }
        </div>
    )
}


    // // adds the wx data from the most recent city to the "all city wx" data base
    // useEffect(() => {
    //     setAllWxData([...allWxData, weatherData])
    // }, [weatherData]);