import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,
        faCloudSun, 
        faUmbrella, 
        faSnowflake, 
        faSun, 
        } from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({ weatherType }) {
    switch(weatherType) {
        case "Clear":
            return <FontAwesomeIcon icon={faCloudSun} />;
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud} />;
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} />;
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} />;
        case "Sun":
            return <FontAwesomeIcon icon={faSun} />;
        default:
            return null;
    }
}

export default WeatherIcon;