import React from 'react'

export default function ForecastPage( { comment , dayhour, humidity, precip, temp, wind } ) {

    // comment , dayhour, humidity, precip, temp, wind 
    function clothingCard () {

     if  (temp > 60 && temp  < 69) {
        return "try a tank top or t-shirt with shorts";
        } else {
        return "other"
        }
    }



return (
    <div>
{clothingCard()}
    </div>
    );
}