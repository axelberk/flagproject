import "./Navbar.css"
import Brightness7SharpIcon from '@mui/icons-material/Brightness7Sharp';
import "./ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";


const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div className="Navbar">
            <a href="/" className="NavbarLink">Countries of the World</a>
            <img className="Logo" src="/logo.png" alt="" />
            <button className="light-dark" onClick={toggleTheme}>
                <Brightness7SharpIcon className="bright-icon"></Brightness7SharpIcon>{theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    )
}

export default Navbar