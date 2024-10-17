import React from 'react'
import ReactDOM from "react-dom/client"
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import HomePage from "./Components/HomePage"
import Search from "./Components/Search"
import Dropdown from "./Components/Dropdown"
import CountryCard from "./Components/CountryCard"
import CountryPage from "./Components/CountryPage"

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

         
         const sortedCountries = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredCountries(results)
  }, [searchQuery, countries])

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route
          path='/'
          element={
          <HomePage>
            <div className='main-container'>
              <div className='filter-container'>
                <Search onSearch={setSearchQuery}/>
                <Dropdown />
            
              </div>
              <CountryCard countries={filteredCountries}/>
            </div>
          </HomePage>
        }
        />
        <Route path='/country/:countrycode' element={<CountryPage />}/>
        
        </Routes>
      </div>
    </BrowserRouter>  
  )
}

export default App
