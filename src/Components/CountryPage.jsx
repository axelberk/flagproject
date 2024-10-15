import React, { useState, useEffect } from "react";
import "./CountryPage.css";
import { useParams, Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryPage = () => {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        setCountryData(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setLoading(false);
      }
    };
    fetchCountryData();
  }, [countryCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!countryData) {
    return <div>Country not found</div>;
  }

    return (
        <div className="CountryPage">
            <div className="back-section">
                <Link to="/">
                    <button className="back-button">
                        <ArrowBackIcon></ArrowBackIcon>
                        Back
                        </button>
                </Link>
            </div>
            <img src={country.flags.svg} alt={`${countryData.name.common} flag`} className="country-flag"/>
            <div className="country-details">
                <h3>{countryData.name.common}</h3>
                <p><strong>Population: </strong>{countryData.population.toLocaleString()}</p>
                <p><strong>Region: </strong>{countryData.region}</p>
                <p><strong>Capital: </strong>{countryData.capital?.[0]}</p>
                <p><strong>Native name: </strong>{Object.values(countryData.name.nativeName)?.[0]?.common}</p>
                <p><strong>Top Level Domain: </strong>{countryData.tld?.join(', ')}</p>
                <p><strong>Currencies: </strong>{Object.values(countryData.currencies)?.[0]?.name}</p>
                <p><strong>Language: </strong>{Object.values(countryData.languages)?.join(', ')}</p>
                <div className="border-countries">
                    <p><strong>Border Countries: </strong></p>
                    {countryData.borders?.length ? (
                        countryData.borders.map((border) => (
                            <Link key={border} to={`/country/${border}`} className="border-country">
                                {border}
                            </Link>
                        ))
                    ) : (
                        <p>None</p>
                    )}
                </div>
            </div>
        </div>
    )    
}

export default CountryPage