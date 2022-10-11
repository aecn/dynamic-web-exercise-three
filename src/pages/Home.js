import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from "../components/WeatherCard";
import Header from '../components/Header';

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
                `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}`
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
        humidity 
    } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        return {
            humidity: weatherMain.humidity,
        };
    }, [weatherData]);

    return (
        <div>
            <Header/>
            <h1>Weather App</h1>
            <WeatherCard 
            city={city} 
            humidity={humidity} 
            />
        </div>
    );
}

export default Home;