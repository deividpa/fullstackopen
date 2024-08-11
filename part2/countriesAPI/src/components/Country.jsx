import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Country = ({ name, capital, population, languages, flagURL }) => {

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

    if(capital || population) {
        return (
            <div style={{ backgroundColor: '#888' }}>
                <h2>{name}</h2>
                {capital && <p>Capital: {capital}</p>}
                {population && <p>Population: {population}</p>}
                {languages && (
                    <>
                        <h2>Languages</h2>
                        <ul>
                            {Object.values(languages).map((language) => (
                                <li key={language}>{language}</li>
                            ))}
                        </ul>
                    </>
                )}
                {flagURL && <img src={flagURL} alt={name} style={{ width: '100px' }} />}

                {weather && (
                <div>
                    <h2>Weather in {capital}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                </div>
            )}
            </div>
        );
    }

    return (
        <div>
            <span>{name}</span>
        </div>
    );
};

export default Country;