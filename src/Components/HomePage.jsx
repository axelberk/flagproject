import React, { useState, useEffect } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import CountryCard from "./CountryCard";
import { Typography } from "@mui/material";
import "./HomePage.css";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let results = countries;

    if (searchQuery) {
      results = results.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRegion !== "All") {
      results = results.filter((country) => country.region === selectedRegion);
    }

    setFilteredCountries(results);
  }, [searchQuery, selectedRegion, countries]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="HomePage">
      <div className="main-container">
        <div className="filter-container">
          <Search onSearch={handleSearch} searchResults={filteredCountries} />
          <Dropdown onSelectRegion={setSelectedRegion} />
        </div>

        {filteredCountries.length === 0 && searchQuery ? (
          <Typography
            sx={{
              color: "white",
              marginTop: "16px",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            No countries found.
          </Typography>
        ) : (
          <CountryCard countries={filteredCountries} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
