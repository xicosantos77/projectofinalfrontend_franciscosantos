import "./Header.scss"; 
import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 

const Header = ()=> {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <header className="header">
            <div className="header-logo">
                <h1><Link to="/">T E L L O</Link></h1>
            </div>
            
            <div className="header-nav"> 
                <nav>    
                    <ul>
                        <li className="header-nav-item"><Link to="/">Home</Link></li>
                        <li className="header-nav-item"><Link to="Blog">Blog</Link></li>
                        <li className="header-nav-item"><Link to="AboutUs">About Us</Link></li>
                        <li className="header-nav-item"><Link to="ContactUs">Contact Us</Link></li>
                        <li><Link to="Subscribe"><input type="button"  id="subscribe-button" value = "Subscribe" /></Link></li> 
                    </ul>
                </nav>
            </div>
            
            <div  className={`header-nav-hamburguer ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            
            <div className={`header-nav-hamburguer-menu ${showMenu ? 'active' : ''}`}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/AboutUs">About Us</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                        <li id="subscribe-button-hamburguer"><Link to="/Subscribe"><input type="button"  id="subscribe-button" value = "Subscribe" /></Link></li> 
                    </ul>
                </nav>
            </div>  
        </header>
    )
}

export default Header;