import React from 'react';

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
        <p>Weather Type: {weatherType}</p>
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