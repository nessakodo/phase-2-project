import React from 'react'


export default function ForecastPage( { weather } ) {

const { temp } = weather

console.log({temp})
    // comment , dayhour, humidity, precip, temp, wind 


    function tempCard () {

        if  (temp < 0) {
        return "You should run on a treadmill inside! It's too cold.";
        } else if  (temp > 0 && temp  < 19) {
        return "Two/three upper-body layers, one/two lower body layers";
        } else if  (temp > 19 && temp  < 29) {
        return "Two upper-body layers and tights";
        } else if  (temp > 30 && temp  < 39) {
        return "Long sleeved shirt and tights";
        } else if  (temp > 40 && temp  < 49) {
        return "Long sleeved shirt and tights or shorts";
        } else if  (temp > 50 && temp  < 59) {
        return "T-shirt with shorts";
        } else if (temp > 60 && temp < 69) {
        return "Tank top or T-shirt with shorts"
        } else if (temp > 70) {
        return "Lightweight clothing, tank top, shorts"
        } else {
        return "wear something else"
        }
    }



return (
    <div>
{tempCard()}
    </div>
    );
}