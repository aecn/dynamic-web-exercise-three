import React from 'react';
import WeatherIcon from "./WeatherIcon";


function weatherCard({
    city,
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType, 
    windSpeed,
}) {
    return (
        <div className="weatherCard">
        <h2>{city}</h2>
        <div className="weatherCard-weatherType">
            <WeatherIcon weatherType ={weatherType} />
            <p className="WeatherCard-type">{weatherType}</p>
        </div>
        <p>Current: {currentTemp}&deg;F</p>
        <p>High: {highTemp}&deg;F</p>
        <p>Low: {lowTemp}&deg;F</p>
        <p>Cloudiness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {windSpeed} mph</p>
        </div>
    );
}

export default weatherCard;