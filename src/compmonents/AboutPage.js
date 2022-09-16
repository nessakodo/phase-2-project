import React from "react";
import RunningChart from "../assets/RunningChart.png";

export default function AboutPage() {

return (
    <div className="panel">
        <div>
            <h2>ABOUT PAGE: Happy running!</h2>
        
        <p><em>“For me, running is both exercise and a metaphor. Running day after day, piling up the races, bit by bit I raise the bar, and by clearing each level I elevate myself. At least that's why I've put in the effort day after day: to raise my own level. I'm no great runner, by any means. I'm at an ordinary - or perhaps more like mediocre-level. But that's not the point. The point is whether or not I improved over yesterday. In long-distance running the only opponent you have to beat is yourself, the way you used to be.” 
            <br></br><strong>― Haruki Murakami, What I Talk About When I Talk About Running</strong></em></p>

        <p>Welcome to our page!
        We are a group of female software engineers living in Denver, CO who love to be active.
        </p>
        </div>

        <div className="box">
        <img src={RunningChart} alt="Running Chart" className="running-image"/>
    <div className="about-us">
        <h2>Attributions & Inspiration</h2>
        <p>Inspiration for this site came from a very old Runner's World magazine article, <a href = "https://www.runnersworld.com/training/a20803133/what-to-wear/"> a lso available digitally</a>.
        During our research for this project, we also found <a href = "https://dressmyrun.com/">DressMyRun.com</a>, which took much of our ideas and executed them!
        Weather forcast data is powered by <a href="https://weatherdbi.herokuapp.com/documentation/v1">weatherDB</a>.
        This app was built using <a href="https://reactjs.org/">React</a> and styled with ...
        </p>
        </div>
        </div>
    </div>
    )}