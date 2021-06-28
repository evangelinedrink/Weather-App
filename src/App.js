import React from "react"; //This imports React and React.Component
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //Importing Bootstrap
import Weather from "./app_component/weather.component.jsx"; //The ./ says to go to another folder, which is the app_component folder.  The weather.component is the weather.component.jsx file.
import "weather-icons/css/weather-icons.css"; //Importing the Weather Icons displays
import weatherAPIKey from "./bin/weatherAPIKey.js"; //Importing the Weather API Key
import { tsUndefinedKeyword } from "@babel/types";

//Weather App Tutorial is from this video: https://www.youtube.com/watch?v=IxuqmfO6p28&t=1164s 

const API_key= weatherAPIKey;

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      city: undefined,//Getting API information from the Open Weather app
      country: undefined,
    };
    this.getWeather(); //Calling getWeather method in the constructor


  }
  
//Creating a Method where we will get data from the API call from the OpenWeather Map
getWeather= async () => {
  const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}`) //We are going to make the API call in this Fetch function

  //Converting all the data received from OpenWeather to .JSON format
  const response= await api_call.json();

  //Display this response in the console.
  console.log(response);

  //Being able to access the city and country that the user searched for, so it can be seen in the Weather app.
  this.setState({
    city: response.name, //Obtained from the response's json file that shows the city under the title name.
    country: response.sys.country, //Obtained from the response's json file that shows the country under the sys tab and then country label.
  })
}

  render() {
    return (
      <div className="App">
        <Weather city={this.state.city} country={this.state.country}/> {/*Calling the Weather component from weather.component.jsx */}
    </div>
    );
  }
}


export default App;
