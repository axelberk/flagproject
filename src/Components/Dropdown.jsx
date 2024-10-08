import "./Dropdown.css"

const Dropdown = () => {
    return (
        <div className="dropdownContainer">
            <select id="region" className="Dropdown" required>
                <option value=""></option>
                <option value="all">All</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>

            </select>
            <label htmlFor="region" className="dropdownLabel">Region</label>
        </div>
        
    )
}

export default Dropdown