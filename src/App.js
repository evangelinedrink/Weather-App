import React from "react"; //This imports React and React.Component
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //Importing Bootstrap
import Weather from "./app_component/weather.component.jsx"; //The ./ says to go to another folder, which is the app_component folder.  The weather.component is the weather.component.jsx file.
import "weather-icons/css/weather-icons.css"; //Importing the Weather Icons displays
import weatherAPIKey from "./bin/weatherAPIKey.js"; //Importing the Weather API Key
import { tsUndefinedKeyword } from "@babel/types";

//Weather App Tutorial is from this video: https://www.youtube.com/watch?v=IxuqmfO6p28&t=1164s 
//Stopped at 26 minutes and 19 seconds
const API_key= weatherAPIKey;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      city: undefined,//Getting API information from the Open Weather app
      country: undefined,
      icon: undefined,
      main: undefined,
      fahrenheit: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description:"",
      error: false,
    };
    this.getWeather(); //Calling getWeather method in the constructor
    this.weatherIcon= { //Specifying the weather icon property
      Thunderstorm: "wi-thunderstorm" //specifying the weather icon for Thunderstorm

  }
}

//Since the temperature in Open Weather is in Kelvin, we need to convert it to Fahrenheit.
calFahrenheit(temp) {
  let calculateToFahrenheit= Math.floor((temp-273.15)*(9/5)+32); //Math.floor() function returns the largest interger less than or equal to a given number
  return calculateToFahrenheit; //Returning this variable so it can be used in other parts of the code.
}
  
//Creating a Method where we will get data from the API call from the OpenWeather Map
getWeather= async () => {
  const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`) //We are going to make the API call in this Fetch function

  //Converting all the data received from OpenWeather to .JSON format
  const response= await api_call.json();

  //Display this response in the console.
  console.log(response);

  //Being able to access the city and country that the user searched for, so it can be seen in the Weather app.
  //This also updates the this.state data that is located in the Constructor
  this.setState({
    city: response.name, //Obtained from the response's json file that shows the city under the title name.
    country: response.sys.country, //Obtained from the response's json file that shows the country under the sys tab and then country label.
    fahrenheit: this.calFahrenheit(response.main.temp), //The temperature taken from the Open Weather data is in Kelvin, so we need to convert it to Fahrenheit.
    temp_max: this.calFahrenheit(response.main.temp_max), //Converting the maximum temperature from Kelvin to Fahrenheit
    temp_min: this.calFahrenheit(response.main.temp_min), //Converting the minimum temperature from Kelvin to Fahrenheit
    description: response.weather[0].description, //This gets the first value of the weather array, which is the description of the weather (this can be seen in the Object tab in the Console, which is gotten from the Open Weather app)
    icon: this.weatherIcon.Thunderstorm,
  })
}

  render() {
    return (
      <div className="App">
        <Weather 
        city={this.state.city} 
        country={this.state.country} 
        temp_fahrenheit= {this.state.fahrenheit}
        temp_max= {this.state.temp_max}
        temp_min={this.state.temp_min}
        description={this.state.description}
        weatherIcon={this.state.icon}//Specifying the Weather Icon property
        /> {/*Calling the Weather component from weather.component.jsx */}
    </div>
    );
  }
}


export default App;
