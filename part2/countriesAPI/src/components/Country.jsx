import React from 'react';

const Country = ({ name, capital, population, languages, flagURL }) => {

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