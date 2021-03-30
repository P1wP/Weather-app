import React, {useState, useEffect} from "react";
import Heading from "./Heading";
import Location from "./Location";
import Weather from "./weather/Weather";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
        <Row>
            <Col sm={12}>
                <Heading heading = "Weather-App" />
            </Col>
            <Col sm={12}>
                {location ? <Location location = {location} /> : <Location location="Select locaton" />}
            </Col>
            <Col sm={12}>
                {location && <Weather location={location} />}
            </Col>
            
        </Row>
    )
}

export default WeatherApp;