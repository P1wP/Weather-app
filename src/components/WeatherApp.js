import React, {useState, useEffect} from "react";
import Heading from "./Heading";
import Location from "./Location";
import Weather from "./Weather";




function WeatherApp(){
    const [ location, setLocation ] = useState(null);


    const getLocation = () => {
        fetch("https://geolocation-db.com/json/c0593a60-4159-11eb-80cd-db15f946225f")
         .then( response => response.json())
         .then( data => setLocation(data) )
     }
    
    // GET LOCATION
    useEffect(()=>{
       getLocation();
       

    }, location)
    
  

   

    console.log(location)

    return(
        <>
            <Heading heading = "Weather-App" />
            {location ? <Location location = {location} /> : <Location location="Select locaton" />}
            {location && <Weather location={location} />}
           
        </>
    )
}

export default WeatherApp;