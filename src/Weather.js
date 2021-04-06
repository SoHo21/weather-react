import React from "react";


export default function Weather (){
    return (
        <div className="container">
        <div className="weather-app-wrapper">
        <div className="weather-app">
            <form className="mb-3">
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                autocomplete="off"
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <div className="overview">
   <h1>Tokyo</h1>
   </div>
   <div className="row">
   <div className="col-6">
           <ul>
               <li>
                   Last updated: Monday 23:20
                   </li>
               <li>
                   Scattered clouds
                   </li>
           </ul>
       </div>
       <div className="col-6">
           <ul>
               <li>
                   Humidity: 20 %
                   </li>
               <li>
                   Wind: 5 km/h
                   </li>
           </ul>
           </div>
           </div>
           <div className="clearfix weather-temperature">
               <strong>10</strong> °C| °F
           </div>
           </div>
<small>
       <a href="https://github.com/SoHo21/weather-react" target="_blank">Open-source code</a> by Sofia
   </small>
</div>
</div>
    )
}