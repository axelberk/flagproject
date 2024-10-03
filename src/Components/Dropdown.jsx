import "./Dropdown.css"

const Dropdown = () => {
    return (
        <div className="dropdownContainer">
            <label htmlFor="region" className="dropdownLabel">Region</label>
            <select id="region" className="Dropdown">
                <option value="">Region</option>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>

            </select>
        </div>
        
    )
}

export default Dropdown