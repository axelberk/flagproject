import React, { useState, useEffect } from "react";

function CountryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => {
        const sortedCountries = json.sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
        setData(sortedCountries);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="cards-grid">
      {data.map((country) => (
        <div className="card" key={country.cca3}>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} className="flag" />
          <div className="card-info">
            <h3>{country.name.common}</h3>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryCard;
