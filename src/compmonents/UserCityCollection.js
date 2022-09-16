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

        <div>
        <React.Fragment>
        <div>
        <div className="city-list">
        {cityList.length >= 1 ? 
            allWxData.map((eachCity) =>
                <RenderCard
                    key={uuid()}
                    weather={eachCity}
                />
            ) : 
            <h3 className="cities-message"><em>Visit the <a href="http://localhost:3000/profile">Profile page</a> to add cities to your account.</em></h3>
        }
        </div>
        <br></br><br></br>
        <div class="quote">
            <p><em>“When anyone tells me I can't do anything, I'm just not listening anymore” <br></br><br></br><strong>- Florence Griffith Joyner, Olympian</strong></em></p>
        </div>
        </div>
        </React.Fragment>
        </div>
        
    )
}
