import React from "react";
import { Link } from "react-router-dom"; 
import './CountryCard.css';

const CountryCard = ({ countries }) => {
  return (
    <div className="cards-grid">
      {countries.map(country => (
        <Link to={`/country/${country.cca3}`} key={country.cca3}>
          <div className="card">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} className="flag" />
            <div className="card-info">
              <h3>{country.name.common}</h3>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryCard;
