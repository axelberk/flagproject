import "./Dropdown.css"

const Dropdown = () => {
    return (
        <select className="Dropdown">
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="Oceania">Oceania</option>

        </select>
    )
}

export default Dropdown