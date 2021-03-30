import React from "react";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import sunCloud from "../../icons/SVG/sunCloud.svg";
import sunny from "../../icons/SVG/sunny.svg";

import sunrise from "../../icons/SVG/sunrise.svg";
import sunset from "../../icons/SVG/sunset.svg";

function WeatherDetails ({weather}){

    
    if(weather){
        // OPEN WEATHER ICON
        let icon = weather.current.weather[0].icon;
        let iconUrl =  "http://openweathermap.org/img/wn/"+icon+"@2x.png"

        // CUSTOM ICON
        /*
        switch(weather.current.weather[0].description){
            case "clear sky":
                icon = sunny;
                break;
            case "cloudy":
                icon = sunCloud;
                break;
            default:
                break;
        };
        */
    
    return(
        
        <Row>
        <div className="Weather container">
            <Col sm={12}>
            <div className="Weather__day">
                <p className="Weather__day--text">{moment().format('LL')}</p>
                <p className="Weather__day--text">{moment().format('dddd')}</p>
                
            </div>
            </Col>

            <Col sm={12}>
            <div className="Weather__image">
                <img className="Weather__image--icon" alt="icon of weather" src={iconUrl} />
                <p className="Weather__image--text">{weather.current.weather[0].description}</p>
            </div>
            </Col>
            
            <Col sm={12}>
            <div className="Weather__temp">
                <p className="Weather__temp--text">{weather.current.temp } &deg;C </p>
            </div>
            </Col>

            <Row>
            <Col xs={6}>
            <div className="Weather__sunrise">
                <img className="Weather__sunrise--icon" src={sunrise} alt="sunrise icon"/>
                <p className="Weather__sunrise--text">{new Date(weather.current.sunrise * 1000).toLocaleTimeString('en-GB')}</p>
            </div>
            </Col>

            <Col xs={6}>
            <div className="Weather__sunset">
            <img className="Weather__sunset--icon" src={sunset} alt="sunset icon"/>
                <p className="Weather__sunset--text"> {new Date(weather.current.sunset * 1000).toLocaleTimeString('en-GB')}</p>
            </div>
            </Col>
            </Row>
            
            <Col sm={12}>
            <p>Humidity: {weather.current.humidity} %</p>
            </Col>

        </div>
        </Row>
        
    )
    } // END IF

    return(
        <p> OOps, somethign went wrong</p>
    )
}

export default WeatherDetails;