import React from "react";
import RunningChart from "../assets/RunningChart.png";

export default function AboutPage() {

return (
    <React.Fragment>
    <div className="panel">
        <div>
            <h1>🏃🏻‍♂️HAPPY RUNNING!</h1>
            <br></br>
            <p>We are a group of female software engineers living in Denver, CO who love to be active. We completed this project in Phase 2 of our time at Flatiron School.</p>
           Nessa Kodo | Shelby Lee | <a href="https://www.linkedin.com/in/racheljmullen/">Rachel Mullen </a>
        </div>
        <div className="box">
            <img src={RunningChart} alt="Running Chart" className="running-image"/>
         <div className="about-us">
            <h2>Attributions & Inspiration</h2>
            <p>Inspiration for this site came from a very old Runner's World magazine article (left), <a href = "https://www.runnersworld.com/training/a20803133/what-to-wear/"> also available digitally</a>.
            <br></br><br></br>During our research for this project, we also found <a href = "https://dressmyrun.com/">DressMyRun.com</a>, which took much of our ideas and executed them! We wanted to make something prettier.
            <br></br><br></br>Weather forcast data is powered by <a href="https://weatherdbi.herokuapp.com/documentation/v1">weatherDB</a>.
            <br></br><br></br>This app was built using <a href="https://reactjs.org/">React</a>. Graphics were created using <a href="http://canva.com/">Canva</a>.</p>
        </div>
        </div>
        <div class="quote">
                <p><em>“I'm no great runner, by any means. I'm at an ordinary - or perhaps more like, mediocre-level. But that's not the point. The point is whether or not I improved over yesterday. In long-distance running the only opponent you have to beat is yourself, the way you used to be.”<br></br><br></br><strong>― Haruki Murakami, What I Talk About When I Talk About Running</strong></em></p>
            </div>
    </div>
    </React.Fragment>
    )
}