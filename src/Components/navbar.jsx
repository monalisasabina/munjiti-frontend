import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css"
import logo from '../Pictures/munjiti-church-high-resolution-logo.png'
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

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
             {/* LOGO */}
            <div className="nav_link">
                <NavLink to="/">
                       <img src={logo} className="logo"/>
                </NavLink>
            </div>

            {/* HOME */}
            <NavLink to="/" className="nav_link">Home</NavLink>

            {/* DROPDOWN*/}
            <div className="dropdown_cont">
                <button className="nav_link" onClick={() =>setShowDropdown(!showDropdown)} >About <div className="dropdown_icon"> <RiArrowDropDownLine/></div> </button>

                {showDropdown && (
                    
                    <div className="dropdown_menu">
                        <button  onClick={() => handleDropdownClick("/about/history")}>History</button>
                        <button  onClick={() => handleDropdownClick("/about/pastor")}>Pastor</button>
                    </div>
                )}
            </div>

            {/* OTHER NAV LINKS */}
            <NavLink to="/ministries" className="nav_link">Ministries</NavLink>
            <NavLink to="/compassion" className="nav_link">Compassion</NavLink>
            <NavLink to="/contacts" className="nav_link">Contact Us</NavLink>
            <NavLink to="/give" className="nav_link">Give</NavLink>
        </nav>
    )
}

export default NavBar