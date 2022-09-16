import React from "react";
import NavBar from "./NavBar";
import HeaderPhoto from '../assets/HeaderPhoto.png';


export default function Header() {

  return (
    <React.Fragment>
    <div>
      <header>
        <h1>
       🌞 WEATHER YOUR RUN 🏃🏻‍♂️ 
        <br/>
        </h1>
          <p><em>A weather-based app to advise your running wardrobe.</em></p>
    <div>
      <br></br>
      <NavBar img src={HeaderPhoto}/>
    </div>
      </header>
    </div>
    </React.Fragment>
  );
}
