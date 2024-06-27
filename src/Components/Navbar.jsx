import "./Navbar.css"
import Brightness7SharpIcon from '@mui/icons-material/Brightness7Sharp';


const Navbar = () => {
    return (
        <div className="Navbar">
            <p>Countries of the World</p>
            <img className="Logo" src="/logo.png" alt="" />
            <button>
                <Brightness7SharpIcon className="bright-icon"></Brightness7SharpIcon>Dark Mode
            </button>
        </div>
    )
}

export default Navbar