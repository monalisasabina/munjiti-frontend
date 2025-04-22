import { NavLink } from "react-router-dom";
import "./nav.css"

function NavBar(){

    return(
        <nav>
            <NavLink to="/" className="nav_link">Home</NavLink>
            <NavLink to="/about" className="nav_link">About</NavLink>
            <NavLink to="/ministries" className="nav_link">Ministries</NavLink>
            <NavLink to="/compassion" className="nav_link">Compassion</NavLink>
            <NavLink to="/contacts" className="nav_link">Contact</NavLink>
            <NavLink to="/give" className="nav_link">Give</NavLink>
        </nav>
    )
}

export default NavBar