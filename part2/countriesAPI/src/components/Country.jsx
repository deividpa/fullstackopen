import React from 'react';
import Weather from './Weather';

const Country = ({ name, capital, population, languages, flagURL }) => {

    return (
        <div style={{ backgroundColor: '#DDD' }}>
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
            <Weather capital={capital} />
        </div>
    );
};

export default Country;