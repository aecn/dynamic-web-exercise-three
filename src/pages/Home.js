import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

function Home() {
    // Value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("Orlando");
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const cityToQuery = searchParams.get("city") || city;
        setCity(cityToQuery);
        // Query OpenWeatherAPI for weather data
        // Make request to OpenWeather based on city
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&units=imperial&appid=${WEATHER_APP_API_KEY}`
            )
            .then(function(response) {
            setWeatherData(response.data);
        })
        .catch(function(error) {
            console.warn(error);
            setWeatherData({});
        });
    }, []);

    const {
        cloudiness,
        currentTemp,
        highTemp, 
        humidity,
        lowTemp,
        weatherType,
        windSpeed,
    } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        const weatherClouds = weatherData.clouds || {};
        return {
            city: weatherData.name,
            cloudiness: weatherClouds.all,
            currentTemp: Math.round(weatherMain.temp),
            highTemp: Math.round(weatherMain.temp_max),
            humidity: weatherMain.humidity,
            lowTemp: Math.round(weatherMain.temp_min),
            weatherType: weatherData.weather && weatherData.weather[0].main,
            windSpeed: weatherData.wind && weatherData.wind.speed,
        };
    }, [weatherData]);

    return ( // display BG color based on cloudiness
        <div className="background=color" style={{backgroundColor: `rgba(186, 231, 247, ${cloudiness / 100})`}}>
            <div className="weather-wrapper">  
                <Header 
                />
                <WeatherCard 
                city={city}
                cloudiness={cloudiness}
                currentTemp={currentTemp}
                highTemp={highTemp} 
                humidity={humidity}
                lowTemp={lowTemp} 
                weatherType={weatherType}
                windSpeed={windSpeed}
                />
            </div>
        </div>
    );
}

export default Home;