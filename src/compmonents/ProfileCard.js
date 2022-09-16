import React, { useState } from "react";
import Login from "./Login";
import CityForm from "./CityForm";
import {v4 as uuid} from "uuid";

export default function ProfileCard({ onAddUser, onCurrentUser, currentUser, onAddUserCities, cityList, hasLoggedIn, onHasLoggedIn }) {

    const thisUser = currentUser.id

    //const [cityFormatted, setCityFormatted] = useState("")

    function handleNewCity(formattedCity) {
        onAddUserCities(formattedCity)
            fetch(`http://localhost:4000/users/${thisUser}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    cities: [...cityList, formattedCity]
                })
            })
    }

 return (
    <div>
        {hasLoggedIn ?
        <div>
            <h1>Welcome, {thisUser}!</h1>
            <p>Add Your Favorite Cities:</p>
            <CityForm
                //onCityFormatSet={(formattedCity) => setCityFormatted(formattedCity)}
                onFreshCityDrama={(formattedCity) => handleNewCity(formattedCity)}
            />
            <h2>Your Favorite Cities:</h2>
            {cityList.map((eachCity) => 
                <div key={uuid()}>
                    <p>{eachCity}</p>
                </div>
            )}
        </div>
        : 
        <div>
            <Login 
                onAddUser={onAddUser}
                onCurrentUser={onCurrentUser} 
                onHasLoggedIn={onHasLoggedIn}
            />
        </div>

    }
    </div>
 );
}
