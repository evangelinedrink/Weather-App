import React from "react";

const Weather = (props) => { //Props are properties of the constructor's object in the WeatherAPICall class located in App.js
    //All the JSX code will be in the return statement.
    return (
        <div className= "container"> {/*Container div. */}
            <div className="cards pt-4"> {/*Placing the name of the city and country in the cards tag. Placing top padding margins to the title of the city and country that we are getting the weather data from. (pt-4 means padding top-4*/}
                <h1>
                    {props.city} {/*When you call city and country in the App.js file, this values for the props will change. These values will change based on the data that we get from Open Weather API. */}
                </h1>
                <h5 className= "py-4">  {/*py-4 is the padding margins (p stands for padding). p stands for padding, y stands for top and bottom. 4 is the size. https://mdbootstrap.com/docs/react/utilities/spacing/ */}
                    {/*Using the Weather Icons. From this website: https://github.com/erikflowers/weather-icons */}
                    <i className={`wi ${props.weatherIcon} display-1`}/> {/*This places the weather icon using the Weather Icons. Display-1 tells about the size of the icon. The ${} is calling the weather icon property */}
                </h5>
                
                {/*Using the Ternary Operator (If/Else statement) to show the degrees F when there is someting in the {props.temp_fahrenheit} */}
                {props.temp_fahrenheit? <h1 className= "py-2">{props.temp_fahrenheit}&deg;F</h1>: null} {/*This means we are getting the data from Open Weather APi and placing it in this variable. This is why we use curly braces. &deg;F displays the degree in Fahrenheit.*/}
                
                {/*Creating a command that will show the min and max temperatures. First argument is the min temperature, second argument is the max temperature. */}
                {minMaxTemp(props.temp_min, props.temp_max)}

                {/*Displays the description of the weather. */}
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
};

//Function to determine the minimum and maximum temperature. Parameters are minimum (min) and maximum (max) values
function minMaxTemp(min,max) {
    if (min && max ){
        return( /*Returning JSX code below */
            <h3>
                {/*Creating left and right padding for the minimum and maximum temperature */}
            <span className="px-4">
                    {min}&deg;F {/*Binding the min value by using curly braces.*/}
                </span> 

                {/*Creating left and right padding for the minimum and maximum temperature */}
            <span className="px-4">
                    {max}&deg;F {/*Binding the max value */}
                </span> 

            </h3>
        );
    }
}


//Exporting the Weather constant
export default Weather;