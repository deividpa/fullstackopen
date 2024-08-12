import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

        if (!apiKey) {
            console.error('API key for OpenWeatherMap is not defined');
            return;
        }

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeather(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, [capital]);

    if (!weather) {
        return <p>Loading weather data...</p>;
    }

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
        </div>
    );
};

export default Weather;