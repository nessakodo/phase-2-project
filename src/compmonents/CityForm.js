import React, {useState} from 'react'

export default function CityForm({ onFreshCityDrama, onFreshCityListDrama }) {

    const [freshCity, setfreshCity] = useState('')


    function handleChange(e) {
        setfreshCity(e.target.value)
    }

    function handleFreshSubmit(e) {
        e.preventDefault()
        onFreshCityDrama(freshCity.toLowerCase())
        onFreshCityListDrama(freshCity)
        document.getElementById('freshCityForm').reset()
    }

    return (

    <div>
        <form onSubmit={handleFreshSubmit} id='freshCityForm'>
            <label>
                City:
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>

    )


}