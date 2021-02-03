import React from "react";


function WeatherDetails ({weather, day}){
    return(
        
        <div className="Weather container">
            <div className="Weather__day">
                <p className="Weather__day--text">{day}</p>
            </div>

            <div className="Weather__image">
                {weather && <p className="Weather__image--icon">IMAGE: {weather.daily[0].weather[0].main}</p>}
            </div>
            
            <div className="Weather__temp">
                {weather && <p className="Weather__temp--text">TEMP: {weather.current.temp }</p>}
            </div>
            
        </div>
        
    )
}

export default WeatherDetails;