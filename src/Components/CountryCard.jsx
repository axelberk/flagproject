import React, { useState, useEffect } from "react"

function CountryCard() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))

    }, [])

    return (
        <div></div>
    )
    
}

export default CountryCard