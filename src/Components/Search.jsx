import "./Search.css"

const Search = () => {
    return (
        <div className="inputContainer">
            <input type="text" id="search" className="SearchBar" placeholder=" "/>
            <label className="SearchLabel" htmlFor="search">Search for a country...</label>
            
        </div>
        
    )
}

export default Search