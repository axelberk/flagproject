import "./Dropdown.css"

const Dropdown = () => {
    return (
        <div className="customDropdown">
            <div className="selectedOption">Region</div>
            <div className="dropdownOptions">
                <div className="option">All</div>
                <div className="option">Africa</div>
                <div className="option">Americas</div>
                <div className="option">Asia</div>
                <div className="option">Europe</div>
                <div className="option">Oceania</div>
            </div>
        </div>
        
    )
}

export default Dropdown