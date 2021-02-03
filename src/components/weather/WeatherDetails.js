import React from "react";
import sunCloud from "../../icons/SVG/sunCloud.svg";


function WeatherDetails ({weather, day}){
    return(
        
        <div className="Weather container">
            <div className="Weather__day">
                <p className="Weather__day--text">{day}</p>
            </div>

            <div className="Weather__image">
                <img className="Weather__image--icon" alt="icon of weather" src={sunCloud} />
                {weather && <p className="Weather__image--text">{weather.daily[0].weather[0].main}</p>}
            </div>
            
            <div className="Weather__temp">
                {weather && <p className="Weather__temp--text">{weather.current.temp } &deg;C </p>}
            </div>
            
        </div>
        
    )
}

export default WeatherDetails;