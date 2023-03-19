import { useState, useEffect } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter';
import './App.css';
import CountryListElement from './components/CountryListElement';
import Country from './components/Country';

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countries, setCountries] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState(null)
  //const [country, setCountry] = useState({})

  const hook = () => {
    countryService
      .getAll()
      .then(allCountries => {
        console.log(allCountries.map(country => country.name.common))
        setCountries(allCountries)
      })
  }

  useEffect(hook, [])

  const onSearch = (event) => {
    setCountryFilter(event.target.value)
    setFilteredCountries(countries.filter(country => {
      console.log(`${country.name.common.toLowerCase()} including ${event.target.value.toLowerCase()} is ${country.name.common.toLowerCase().includes(event.target.value.toLowerCase())}))}`)
      return country.name.common.toLowerCase().includes(event.target.value.toLowerCase())}))
  }


  const componentToShow = () => {
    if (filteredCountries && filteredCountries.length > 10) {
      return (
        <>
          <p>Too many matches, specify another filter.</p>
        </>
      )
    }
    else if (filteredCountries && filteredCountries.length > 1) {
      return (
        <>
          <ul>
            {filteredCountries.map(country =>
              <CountryListElement key={country.id} country={country} />
            )}
          </ul>
        </>
      )
    }
    else if (filteredCountries && filteredCountries.length === 1) {
     
      return <Country country={filteredCountries[0]} />
    }

  }


  return (
    <div>
      <Filter countryFilter={countryFilter} onSearch={onSearch}></Filter>
      {componentToShow()}
    </div>);

}

export default App;
