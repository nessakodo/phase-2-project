import React, { useState } from "react";
import Login from "./Login";
import CityForm from "./CityForm";
import { v4 as uuid } from "uuid";

export default function ProfileCard({
  onAddUser,
  onCurrentUser,
  currentUser,
  onAddUserCities,
  cityList,
  hasLoggedIn,
  onHasLoggedIn,
}) {
  const thisUser = currentUser.id;

  //const [cityFormatted, setCityFormatted] = useState("")

  function handleNewCity(formattedCity) {
    onAddUserCities(formattedCity);
    fetch(`http://localhost:4000/users/${thisUser}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cities: [...cityList, formattedCity],
      }),
    });
  }

  return (
    <React.Fragment>
      <div>
        {hasLoggedIn ? (
          <div>
            <h1>Welcome, {thisUser}!</h1>
            <p>Enter your favorite cities to go for a run:</p>
            <CityForm
              //onCityFormatSet={(formattedCity) => setCityFormatted(formattedCity)}
              onFreshCityDrama={(formattedCity) => handleNewCity(formattedCity)}
            />
            <h1>Your Favorite Cities:</h1>
            {cityList.map((eachCity) => (
              <div key={uuid()}>
                <p>{eachCity}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Login
              onAddUser={onAddUser}
              onCurrentUser={onCurrentUser}
              onHasLoggedIn={onHasLoggedIn}
            />
          </div>
        )}
      </div>
      <div class="quote">
        <p>
          <em>
            “If you run, you are a runner. It doesn't matter how fast or how
            far. It doesn't matter if today is your first day or if you've been
            running for twenty years. There is no test to pass, no license to
            earn, no membership card to get. You just run.” <br></br>
            <br></br>
            <strong>― John Bingham, Marathoning for Mortals</strong>
          </em>
        </p>
      </div>
    </React.Fragment>
  );
}
