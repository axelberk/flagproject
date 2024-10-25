import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import './CountryCard.css';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CountryCard = ({ countries }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (countries && countries.length) {
            setLoading(false)
        }
    }, [countries])

  return (
    <div className="cards-grid">
      {countries.map(country => (
        <Link to={`/country/${country.cca3}`} key={country.cca3}>
          <div className="card">
            {loading ? (
                <Skeleton width={500} height={140} baseColor="gray"/>
            ) : (
                <img src={country.flags.svg} alt={`${country.name.common} flag`} className="flag" />
            )}
            
            <div className="card-info">
              <h3>{loading ? <Skeleton variant="text" width={220} baseColor="#f2f2f288"/> : country.name.common}</h3>
              <p><strong>Population:</strong> {loading ? <Skeleton width={100} baseColor="#f2f2f288"/> : country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {loading ? <Skeleton width={100} baseColor="#f2f2f288"/> : country.region}</p>
              <p><strong>Capital:</strong> {loading ? <Skeleton width={100} baseColor="#f2f2f288"/> : country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryCard;
