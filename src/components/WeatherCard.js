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
        <p>Humidity: {humidity}%</p>
        </div>
    );
}

export default weatherCard;