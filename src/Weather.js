import React from "react";
import axios from "axios";

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
   <ul>
       <li>Last updated: Monday 23:20</li>
       <li>Scattered clouds</li>
   </ul>
</div>
   <div className="row">
       <div className="col-6">
           <div className="clearfix weather-temperature">
            
           <span className="float-left">
               <strong>10</strong> °C| °F
           </span>
           </div>
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
</div>
<small>
       <a href="https://pensive-meninsky-2071d5.netlify.app/">Open-source code</a> by Sofia
   </small>
</div>
</div>
    )
}