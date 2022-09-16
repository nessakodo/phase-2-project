import React, { useState } from "react";
import Login from "./Login";
import CityForm from "./CityForm";
import {v4 as uuid} from "uuid";

export default function ProfileCard({ onAddUser, onCurrentUser, currentUser, onAddUserCities, cityList, hasLoggedIn, onHasLoggedIn }) {

    const thisUser = currentUser.id

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
            <p>Welcome, {thisUser}!</p>
            <p>Add Your Favorite Cities:</p>
            <CityForm
                onFreshCityDrama={(formattedCity) => handleNewCity(formattedCity)}
            />
            <p>Your Favorite Cities:</p>
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

