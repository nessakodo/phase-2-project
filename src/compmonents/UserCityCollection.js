import React, {useState, useEffect} from "react";
import RenderCard from "./RenderCard";
import {v4 as uuid} from "uuid";

// renders all of the city cards of those cities
// has search bar

export default function UserCityCollection({cityList }) {

    // wx data for all searched locations
    const [ allWxData, setAllWxData ] = useState([])

    if (cityList) {
        cityList.map((eachCity) => {
            useEffect(() => {
                fetch(`https://weatherdbi.herokuapp.com/data/weather/${eachCity}`)
                .then(res => res.json())
                .then(data => setAllWxData(allWxData=>[...allWxData, data]))
            },[])
        })
    }

    return (
        <div className="city-list">
        {cityList.length >= 1 ? 
            allWxData.map((eachCity) =>
            <p className="data-card">
                <RenderCard
                    key={uuid()}
                    weather={eachCity}
                />
                </p>
            )
        :
        <h2>head over to the profile page to add cities to your account!</h2>
        }
        </div>
    )
}


