import React from "react";

const Weather = () => {
    //All the JSX code will be in the return statement.
    return (
        <div className= "container"> {/*Container div*/}
            <div className="cards"> {/*Placing the name of the city and country in the cards tag*/}
                <h1>London</h1>
            </div>
        </div>
    );
};

//Exporting the Weather constant
export default Weather;