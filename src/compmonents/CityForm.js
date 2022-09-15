import React, {useState} from 'react'


export default function CityForm({onFreshCityDrama}) {
    
    // state variable to keep track of city being inputted
    const [freshCity, setFreshCity] = useState('')

    // state variable to be one behind freshCity
    const [thisCity, setThisCity] = useState('')

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
                setThisCity(freshCity)
            }
        })

        document.getElementById('freshCityForm').reset()
    }

    return (
    <div>
        <form onSubmit={handleFreshSubmit} id='freshCityForm'>
            <label>
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
        {cityIsValid ? 
            null : 
            <p>{thisCity} is Not a Valid Input, Please Try Again!</p>
        }
    </div>
    )
}

