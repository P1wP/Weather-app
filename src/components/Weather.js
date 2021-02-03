import React, {useState, useEffect} from "react";


function Weather({location}){
    console.log(location)

    const [ weather, setWeather ] = useState(null);
    const key = "8ec9340ff0d5a9dfde366263add4dc06"

    // FETCH WEATHER DATA
    const getWeather = () => {
        
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+location.latitude+'&lon='+location.longitude+'&units=metric&exclude=minutely,hourly&appid='+key)
        .then(response => response.json())
        .then( data => setWeather(data))
        
        
    };
    
    useEffect(()=>{
        getWeather();
        console.log(weather)    
        
    },weather)

    return(
        <>
            <p>WATHER APP FUCK YEAH</p>
            {weather && <p>IMAGE: {weather.daily[0].weather[0].main}</p>}
            {weather && <p>TEMP: {weather.daily[0].temp.day }</p>}
            
        </>
    )
}

export default Weather;