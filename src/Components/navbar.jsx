import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css"
import { useState } from "react";

function NavBar(){

    // Handling the dropdown on the 'about' on the navbar
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();
    const handleDropdownClick = (path) => {
        navigate(path);
        setShowDropdown(false) //closes the dropdown after navigation
    };


    return(
        <nav>
            <NavLink to="/" className="nav_link">Home</NavLink>

            {/* Dropdown */}
            <div className="nav-link">
                <button className="about" onClick={() =>setShowDropdown(!showDropdown)} >About ▾</button>

                {showDropdown && (
                    
                    <div>
                        <button className="dropdown" onClick={() => handleDropdownClick("/about/history")}>History</button>
                        <button className="dropdown"  onClick={() => handleDropdownClick("/about/pastor")}>Pastor</button>
                    </div>
                )}
            </div>


            <NavLink to="/ministries" className="nav_link">Ministries</NavLink>
            <NavLink to="/compassion" className="nav_link">Compassion</NavLink>
            <NavLink to="/contacts" className="nav_link">Contact</NavLink>
            <NavLink to="/give" className="nav_link">Give</NavLink>
        </nav>
    )
}

export default NavBar