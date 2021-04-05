import React from "react";
import axios from "axios";

export default function Weather (){
    return (
        <div class="container">
        <div class="weather-app-wrapper">
        <div class="weather-app">
            <form id="search-form" class="mb-3">
                <div class="row">
                <div class="col-9">
                <input 
                type="search" 
                placeholder="Enter a city..."
                class="form-control" 
                id="city-input"
                autocomplete="off"
                />
                </div>
                <div class="col-3">
                <input type="submit" value="Search" class="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <div class="overview">
   <h1>Tokyo</h1>
   <ul>
       <li>Last updated: Monday 23:20</li>
       <li>Scattered clouds</li>
   </ul>
</div>
   <div class="row">
       <div class="col-6">
           <div class="clearfix weather-temperature">
            
           <span class="float-left">
               <strong>10</strong> °C| °F
           </span>
           </div>
        </div>
       <div class="col-6">
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
       <a href="https://github.com/SoHo21/the-weather-app" target="_blank">Open-source code</a> by Sofia
   </small>
</div>
</div>
    )
}