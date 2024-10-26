import "./Navbar.css"
import Brightness7SharpIcon from '@mui/icons-material/Brightness7Sharp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import "../ThemeContext";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";;


const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const logoSrc = theme === "light" ? "/logo-dark.png" : "/logo.png";
    return (
        <div className="Navbar">
            <a href="/" className="NavbarLink">Countries of the World</a>
            <img className="Logo" src={logoSrc} alt="" />
            <button className="light-dark" onClick={toggleTheme}>
                {theme === 'light' ? (
                    <>
                    <Brightness4Icon className="mode-icon" />
                    Light Mode
                    </>
                ) : (
                    <>
                    <Brightness7SharpIcon className="mode-icon" />
                    Dark Mode
                    </>
                )}
            </button>
        </div>
    )
}

export default Navbar