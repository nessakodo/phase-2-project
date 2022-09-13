import React from "react";
import CitiesForm from "./CitiesForm"
import CitiesList from "./CitiesList"
import ForecastPage from "./ForecastPage";


export default function HomePage({ currentWx }) {

  console.log(currentWx)

  // let currentTemp = currentWx.currentConditions.temp.f

  // console.log(currentTemp)


 return (
    <div>
      <CitiesForm />
      <CitiesList />
      {/* <ForecastPage
        // currentWx={ currentWx }
      /> */}

      <h1>hello i am the home page</h1>

    </div>
 )}