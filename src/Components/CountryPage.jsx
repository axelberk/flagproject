import React, {useState, useEffect} from "react"
import "./CountryPage.css"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const CountryPage = (params) => {
    const { countryCode } = useParams();
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    return (
        <div className="CountryPage">
            <div className="back-section">
                <Link to="/">
                    <button className="back-button">Back</button>
                </Link>
            </div>
            <img src="" alt="" />
            <div className="country-details">
                <h3></h3>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
                <p><strong></strong></p>
            </div>

        </div>
    )    
}

export default CountryPage