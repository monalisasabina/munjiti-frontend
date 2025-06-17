import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css"
import logo from '../Pictures/munjiti-church-high-resolution-logo.png'
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";


function NavBar(){

    // Handling the dropdown on the 'about' on the navbar
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showCompassionDropdown, setShowCompassionDropdown] = useState(false);
    const [showMinistriesSubmenu, setShowMinistriesSubmenu] = useState(false);


    const navigate = useNavigate();

    const handleDropdownClick = (path) => {
        navigate(path);
        setShowAboutDropdown(false) //closes the dropdown after navigation
        setShowCompassionDropdown(false)
        setShowMinistriesSubmenu(false)
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

            {/* ABOUT DROPDOWN*/}
            <div className="dropdown_cont">
                <button className="nav_link" 
                        onClick={() => {
                            setShowAboutDropdown(!showAboutDropdown)
                            setShowCompassionDropdown(false);
                            setShowMinistriesSubmenu(false);
                        }} 
                        
                        
                        >About <div className="dropdown_icon"> <RiArrowDropDownLine/></div> </button>

                {showAboutDropdown && (
                    
                    <div className="dropdown_menu">
                        <button  onClick={() => handleDropdownClick("/about/history")}> About</button>
                        <button  onClick={() => handleDropdownClick("/about/pastor")}>Pastor</button>
                    </div>
                )}
            </div>

             {/* COMPASSION DROPDOWN*/}
            <div className="dropdown_cont">
                <button className="nav_link" 
                        onClick={() =>{
                            setShowCompassionDropdown(!showCompassionDropdown)
                            setShowAboutDropdown(false)
                            setShowMinistriesSubmenu(false)

                        }} 

                        > Compassion <div className="dropdown_icon"> <RiArrowDropDownLine/></div> </button>

                {showCompassionDropdown && (
                    
                    <div className="dropdown_menu">
                        <button  onClick={() => handleDropdownClick("/compassion/about")}>About</button>

                        {/* Projects with submenu */}
                        <div className="submenu_parent">

                            <button className="submenu_trigger"
                                    onClick={() =>setShowMinistriesSubmenu(!showMinistriesSubmenu)}
                                    // onMouseEnter={() => setShowMinistriesSubmenu(!showMinistriesSubmenu)}
                                    // onmouseleave ={() => setShowMinistriesSubmenu(!showMinistriesSubmenu)}
                                    
                                    > Projects <MdKeyboardArrowRight /> </button>

                        </div>

                        {/* Projects submenu */}

                        {showMinistriesSubmenu && (
                            <div className="submenu">
                               <button onClick={() => handleDropdownClick("/compassion/youth")}>Youth</button>
                               <button onClick={() => handleDropdownClick("/compassion/women")}>Women</button>
                               <button onClick={() => handleDropdownClick("/compassion/men")}>Men</button>
                            
                        </div>

                        )}
                        
                       
                       
                    </div>
                )}
            </div>

            {/* OTHER NAV LINKS */}
            <NavLink to="/ministries" className="nav_link">Ministries</NavLink>
            <NavLink to="/contacts" className="nav_link">Contact Us</NavLink>
            <NavLink to="/give" className="nav_link">Give</NavLink>
        </nav>
    )
}

export default NavBar