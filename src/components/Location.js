import React from "react";

function Location ({change, location}){

    const final = location.city + ", " + location.state;

    return(
        <div className="Location">
            <h3 className="Location__text">Loaction: {final}</h3>
            
        </div>
    )

}

export default Location;