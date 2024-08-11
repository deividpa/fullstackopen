import React from 'react';
import Country from './Country';

const Countries = ({ countries }) => {

    /* I need to show only the name of the country when there are more than one and ten or less countries */
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
                <Country
                    key={country.name.common}
                    name={country.name.common}
                    capital={country.capital}
                    population={country.population}
                    languages={country.languages}
                    flagURL={country.flags.png}
                />
            ))}
        </div>
    );
};

export default Countries;