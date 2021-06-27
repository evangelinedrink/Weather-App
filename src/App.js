import logo from './logo.svg';
import './App.css';
import Weather from "./app_component/weather.component.jsx"; //The ./ says to go to another folder, which is the app_component folder.  The weather.component is the weather.component.jsx file.

//Weather App Tutorial is from this video: https://www.youtube.com/watch?v=IxuqmfO6p28&t=1164s 

function App() {
  return (
    <div className="App">
      <Weather/> {/*Calling the Weather component from weather.component.jsx */}
    </div>
  );
}

export default App;
