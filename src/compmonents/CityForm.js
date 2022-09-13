import React, {useState} from 'react'


export default function CityForm({ onFreshCityDrama, onFreshCityListDrama }) {
    const [freshCity, setFreshCity] = useState('')
    function handleChange(e) {
        setFreshCity(e.target.value)
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









