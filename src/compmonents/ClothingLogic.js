import React from 'react';
import Zero from "../assets/Zero.png";
import Nineteen from "../assets/Nineteen.png";
import TwentyNine from "../assets/TwentyNine.png";
import ThirtyNine from "../assets/ThirtyNine.png";
import FortyNine from "../assets/FortyNine.png";
import FiftyNine from "../assets/FiftyNine.png";
import SixtyNine from "../assets/SixtyNine.png";
import Seventy from "../assets/Seventy.png";


export default function ClothingLogic( { weather } ) {

const comment = weather.currentConditions.comment
const humidity = weather.currentConditions.humidity
// const precip = weather.currentConditions.precip
const temp = parseInt(weather.currentConditions["temp"]["f"])
const wind = weather.currentConditions["wind"]["mile"]

function tempCardPics () {
    if (temp < 0) {
       return <img src={Zero} alt="Less than 0 clothing" />;
    } else if (temp >= 0 && temp < 19) {
        return <img src={Nineteen} alt="Between 0 and 19 degrees clothing" />;
    } else if (temp >= 20 && temp < 29) {
        return <img src={TwentyNine} alt="Between 20 and 29 degrees clothing" />;
    } else if (temp >= 30 && temp < 39) {
        return <img src={ThirtyNine} alt="Between 30 and 39 degrees clothing" />;
    } else if (temp >= 40 && temp < 49) {
        return <img src={FortyNine} alt="Between 40 and 49 degrees clothing" />;
    } else if (temp >= 50 && temp < 59) {
        return <img src={FiftyNine} alt="Between 50 and 59 degrees clothing" />;
    } else if (temp >= 60 && temp < 69) {
        return <img src={SixtyNine} alt="Between 60 and 69 degrees clothing" />;
    } else if (temp >= 70) {
        return <img src={Seventy} alt="Over 70 degrees clothing" />;
    } else {
        return
    }
}

function tempCard () {
    if (temp < 0) {
        return "You should run on a treadmill inside! It's awfully cold to run outside today.";
    } else if (temp >= 0 && temp < 19) {
        return  "Wear two/three upper-body layers and one/two lower body layers. Bring your hat and gloves!";
    } else if (temp >= 20 && temp < 29) {
        return "Wear two upper-body layers and tights. Consider a hat and gloves.";
    } else if (temp >= 30 && temp < 39) {
        return "Wear a long-sleeved shirt and tights.";
    } else if (temp >= 40 && temp < 49) {
        return "Wear a long-sleeved shirt and tights or shorts.";
    } else if (temp >= 50 && temp < 59) {
        return "Wear a t-shirt with shorts.";
    } else if (temp >= 60 && temp < 69) {
        return "Wear a tank top or t-shirt with shorts.";
    } else if (temp >= 70) {
        return  "Wear a tank top with shorts, preferably light colored.";
    } else {
        return
    }
}

// function precipitationCard () {
//     if (precip < 0) {
//             return "You should run on a treadmill inside! It's too cold.";
//         } else if (temp > 0 && temp < 19) {
//             return "Two/three upper-body layers, one/two lower body layers, gloves, and a hat";
//         } else if (temp > 19 && temp < 29) {
//             return "Two upper-body layers and tights, gloves, and a hat";
//         } else if (temp > 30 && temp < 39) {
//             return "Long sleeved shirt and tights";
//         } else if (temp > 40 && temp < 49) {
//             return "Long sleeved shirt and tights or shorts";
//         } else if (temp > 50 && temp < 59) {
//             return "T-shirt with shorts";
//         } else if (temp > 60 && temp < 69) {
//             return "Tank top or T-shirt with shorts"
//         } else {
//             return ""
//         }
// }

function humidityCard () {
    if (humidity < 50 && humidity > 64 && temp > 60 && temp < 79) {
           return "It's humid today. Consider wearing lighter, breathable clothing.";
        } else if (humidity < 65 && humidity > 74 && temp > 80 && temp < 89) {
            return "The humidity could affect your run today, making it feel much hotter. Drink lots of water and wear lighter, breathable clothing.";
        } else if (humidity < 75 && temp > 90) {
            return "It's going to be a really hot one today with additional humidity! Drink lots of water, wear breathable clothing, and consider even running on the treadmill inside today."
        } else {
            return
        }
}

function commentCard () {
    if  (comment === "Partly cloudy") {
            return "Today could feel cooler today with less sun. Consider an extra layer.";
    } else if (comment === "Sunny") {
            return "Don't forget sunscreen, sunglasses, and/or a hat today to protect your eyes and skin!";
        } else if (comment === "Mostly sunny") {
            return "Don't forget sunscreen, sunglasses, and/or a hat today to protect your eyes and skin!";
        } else if (comment === "Scattered thunderstorms") {
            return "Be careful of lightening and take cover when needed. Grab your rain jacket and a hat to help keep yourself dry.";
        } else if (comment === "Mostly cloudy") {
            return "Today could feel cooler today with less sun. Consider an extra layer.";
        } else if (comment === "Partly sunny") {
            return "Don't forget sunscreen, sunglasses, and/or a hat today to protect your eyes and skin!";
        } else if (comment === "Smoke") {
            return "Make sure you wear reflective gear on days where you are less visible.";
        } else if (comment === "Cloudy") {
            return "Today could feel cooler today with less sun. Consider an extra layer.";
        } else if (comment === "Foggy") {
            return "Make sure you wear reflective gear on days where you are less visible.";
        } else if (comment === "Rain showers") {
            return "Grab your rain jacket and a hat to help keep yourself dry.";
        } else if (comment === "Light rain showers") {
            return "Grab your rain jacket and a hat to help keep yourself dry.";
        } else if (comment === "Snow") {
            return "Grab your jacket and a hat to help keep yourself dry and warm.";
        } else if (comment === "Heavy snow") {
            return "Grab your jacket and a hat to help keep yourself dry and warm.";
         } else if (comment === "Heavy rain showers") {
            return "Grab your rain jacket and a hat to help keep yourself dry.";
        } else {
            return
        }
}

function windCard () {
    if (wind > 8 && wind < 24 && temp > 40) {
           return  "It's windy! Consider wearing sunglasses to protect your eyes.";
        } else if (wind > 8 && wind < 24 && temp < 41) {
        return "It's windy today! Consider wearing sunglasses to protect your eyes and extra clothing for warmth.";
        } else if (wind > 25 && wind < 38 && temp > 40) {
            return "It's extremely windy today! Consider wearing sunglasses and extra clothing for warmth. Be careful on your run to look out for blowing debris.";
        } else if (wind > 25 && wind < 38 && temp < 41) {
            return "It's extremely windy today! Consider wearing sunglasses to protect your eyes. Be careful on your run to look out for blowing debris.";
        } else if (wind > 39) {
            return "Today is too windy of a day to run. Dangerous debris could hurt you, so stay inside.";
        } else {
            return
        }
}

return (
    <li className="card">
        {tempCardPics()}
        <br></br>
        <br></br>
        {tempCard()}
        <br></br>
        <br></br>
        {humidityCard()}
        <br></br>
        <br></br>
        {commentCard()}
        <br></br>
        <br></br>
        {windCard()}
    </li>
    );
}