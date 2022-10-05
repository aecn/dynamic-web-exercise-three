import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WEATHER_APP_API_KEY } from '../API_KEYS';
// URL for accessing OpenWeatherAPI with Query Params
const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}`;

function Home() {
    // Value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});
 
useEffect(() => {
// Query OpenWeatherAPI for weather data
// Make request to OpenWeather based on city
    axios
    .get(openWeatherURL)
    .then(function(response) {
        setWeatherData(response.data);
    })
    .catch(function(error) {
        console.warn(error);
        setWeatherData({});
    });
}, []);

    console.log("state value", weatherData);

    return (
        <div>
            <h1>Weather App</h1>
            <h2>{weatherData.name}</h2>
            <p>Humidity: {weatherData.main && weatherData.main.humidity}%</p>
        </div>
    );
}

export default Home;