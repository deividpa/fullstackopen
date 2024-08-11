import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [countries, setCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => {
                setAllCountries(response.data); // Guarda todos los países
                setCountries(response.data); // Inicialmente muestra todos los países
                console.log(response.data);
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

    return (
        <>
            <h1>Country information</h1>
            <Filter searchTerm={searchTerm} onChange={handleCountryChange} />
            <Countries countries={countries} />
        </>
    )
}

export default App
