import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Dropdown from "./Dropdown";
import CountryCard from "./CountryCard";
import "./HomePage.css";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setAllCountries(data);
            setFilteredCountries(data);
          } catch (error) {
            console.error("Error fetching countries:", error);
          }
        };
    
        fetchCountries();
      }, []);

      useEffect(() => {
        const filtered = allCountries.filter(country => 
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered)
      }, [searchTerm, allCountries])   

      const handleSearch = (term) => {
        setSearchTerm(term)
      }
        

    return (
        <div className='main-container'>
          <div className='filter-container'>
            <Search onSearch={handleSearch} />
            <Dropdown /> 
          </div>
          <CountryCard countries={filteredCountries} />
        </div>
      );
}

export default HomePage