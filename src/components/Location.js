import React from "react";
import Col from "react-bootstrap/Col";

function Location ({change, location}){

    const final = location.city + ", " + location.state;

    return(
        <div className="Location">
            <h3 className="Location__text">{final}</h3>
            
        </div>
    )

}

export default Location;