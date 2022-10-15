import React, { useState } from "react";
import check from "../assets/check-circle.svg";

export default function CityForm({ onFreshCityDrama }) {
  // state variable to keep track of city being inputted
  const [freshCity, setFreshCity] = useState("");

  //state variable to be one behind freshCity
  const [thisCity, setThisCity] = useState("");

  // true if the current city is valid or not
  const [cityIsValid, setCityIsValid] = useState(true);

  let formattedCity;

  function handleChange(e) {
    setFreshCity(e.target.value);
  }

  function handleFreshSubmit(e) {
    e.preventDefault();

    fetch(`https://weatherdbi.herokuapp.com/data/weather/${freshCity}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.region) {
          formattedCity = data.region;
          setCityIsValid(true);
          onFreshCityDrama(formattedCity);
        } else {
          setCityIsValid(false);
          setThisCity(freshCity);
        }
      });
    document.getElementById("freshCityForm").reset();
  }

  return (
    <React.Fragment>
      <div>
        <div class="form-container">
          <form onSubmit={handleFreshSubmit} id="freshCityForm">
            <label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="input-text"
                placeholder="City Name"
              />
            </label>
            <button type="submit" className="submit">
              <img src={check} alt="checkmark" />
            </button>
          </form>
          {cityIsValid ? null : (
            <p>{thisCity} is not a valid input. Please try again!</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
