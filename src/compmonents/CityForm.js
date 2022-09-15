import React, {useState} from 'react'
import check from "../assets/check-circle.svg"


export default function CityForm({onFreshCityDrama}) {
    
    // state variable to keep track of city being inputted
    const [freshCity, setFreshCity] = useState('')

    // true if the current city is valid or not
    const [cityIsValid, setCityIsValid] = useState(true)

    let formattedCity

    function handleChange(e) {
        setFreshCity(e.target.value)
    }

    function handleFreshSubmit(e) {
        e.preventDefault()

        fetch(`https://weatherdbi.herokuapp.com/data/weather/${freshCity}`)
        .then(res => res.json())
        .then (data => {
            if (data.region) {
                formattedCity = data.region
                setCityIsValid(true)
                onFreshCityDrama(formattedCity)
            } else {
                setCityIsValid(false)
            }
        })

        document.getElementById('freshCityForm').reset()
    }


    return (
    <div id="form-container">
        <form onSubmit={handleFreshSubmit} id='freshCityForm'>
            <label>
                <input type="text" name="name" onChange={handleChange} className="input-text"/>
            </label>
            <button type="submit" className="submit">
                <img src={check}/>
            </button>
        </form>
        {cityIsValid ? 
            null : 
            <p>{freshCity} is Not a Valid Input, Please Try Again!</p>
        }
    </div>
    )
}

