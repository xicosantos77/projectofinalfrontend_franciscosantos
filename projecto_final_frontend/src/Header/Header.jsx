import "./Header.scss"; 
import React, {useState} from 'react';

const Header = ()=> {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

     

    return(
        <header className="header">
            <div className="header-logo">
                <h1>T R E L L O</h1>
            </div>
            
            <div className="header-nav">
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </nav>

                <input type="button" 
                id="subscribe-button" 
                value = "Subscribe" 
                />

                <div className="header-nav-hamburguer" onClick={toggleMenu}>
                    <div>
                        <span>teste</span>
                        <span>teste</span>
                        <span>teste</span>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
            
        </header>
        
    )
}

export default Header;