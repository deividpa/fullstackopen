import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null); // Estado para el país seleccionado

    useEffect(() => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => {
                setAllCountries(response.data);
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
                setAllCountries([]);
                setCountries([]);
            });
    }, []);

    const handleCountryChange = (e) => {
        setSearchTerm(e.target.value);

        const filteredCountries = allCountries.filter((country) => {
            return country.name.common.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setCountries(filteredCountries);
    }

    const handleShowCountry = (country) => {
        setSelectedCountry(country);
    }

    const handleBack = () => {
        setSelectedCountry(null);
    }

    return (
        <>
            <h1>Country information</h1>
            <Filter searchTerm={searchTerm} onChange={handleCountryChange} />
            {selectedCountry ? (
                <div>
                    <button onClick={handleBack}>Back</button>
                    <Country
                        name={selectedCountry.name.common}
                        capital={selectedCountry.capital}
                        population={selectedCountry.population}
                        languages={selectedCountry.languages}
                        flagURL={selectedCountry.flags.png}
                    />
                </div>
            ) : (
                <Countries countries={countries} onShowCountry={handleShowCountry} />
            )}
        </>
    );
}

export default App;