import React from "react";

function Location ({change, location}){

    const final = location.city + ", " + location.state;

    return(
        <>
            <h3>Loaction: {final}</h3>
            
        </>
    )

}

export default Location;