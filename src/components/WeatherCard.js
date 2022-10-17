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
            <div className="main-info">
            <h2>{city}</h2>
            <p className="WeatherCard-currentTemp">{currentTemp}&deg;F</p>
            <div className="weatherCard-weatherType">
                <WeatherIcon weatherType ={weatherType} />
                <p className="WeatherCard-type">{weatherType}</p>
            </div>
        </div>
            <div className="extra-info">
                <p>HIGH: {highTemp}&deg;F</p>
                <p>LOW: {lowTemp}&deg;F</p>
                <p>Cloudiness: {cloudiness}%</p>
                <p>Humidity: {humidity}%</p>
                <p>Wind: {windSpeed} mph</p>
            </div>
        </div>
    );
}

export default weatherCard;