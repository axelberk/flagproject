import React from "react"
import "./CountryPage.css"
import { useParams } from "react-router-dom"

const CountryPage = (params) => {
    const { countryCode } = useParams();
    return (
        <div className="CountryPage">
            <div className="back-button"></div>
            <img src="" alt="" />
            <div className="country-details"></div>

        </div>
    )    
}

export default CountryPage