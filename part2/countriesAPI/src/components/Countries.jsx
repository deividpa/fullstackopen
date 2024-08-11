import React from 'react';
import Country from './Country';

const Countries = ({ countries, onShowCountry  }) => {

    if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    }

    if (countries.length === 1) {
        const country = countries[0];
        return (
            <div>
                <Country
                    key={country.name.common}
                    name={country.name.common}
                    capital={country.capital}
                    population={country.population}
                    languages={country.languages}
                    flagURL={country.flags.png}
                />
            </div>
        );
    }

    return (
        <div>
            {countries.map(country => (
                <div key={country.name.common} style={{ marginBottom: '10px' }}>
                    <span>{country.name.common}</span>
                    <button onClick={() => onShowCountry(country)}>Show</button>
                </div>
            ))}
        </div>
    );
};

export default Countries;