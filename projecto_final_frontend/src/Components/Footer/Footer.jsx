import "./Footer.scss"; 
import React, {useState} from 'react'; 
import {Link} from "react-router-dom";

//imagens
import facebook from '../../Assets/Images/Footer/facebook.png';
import twitter from '../../Assets/Images/Footer/twitter.png';
import instagram from '../../Assets/Images/Footer/instagram.png';
import linkedin from '../../Assets/Images/Footer/linkedin.png';

const Footer = ()=>{

    return(
        <footer className="footer-wrapper">
            <div className="footer-nav">
                <div className="footer-nav-logo">
                    <h1>T E L L O</h1>
                </div>
                <div className="footer-nav-links">
                    <nav>
                        <ul>
                            <li><Link to="Home">Home</Link></li>
                            <li><Link to="Blog">Blog</Link></li>
                            <li><Link to="AboutUs">About Us</Link></li>
                            <li><Link to="ContactUs">Contact Us</Link></li>
                            <li><Link to="PrivacyPolicy">Privacy Policy</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="footer-subs">
                <div className="footer-subs-title">
                    <h1>Subscribe to our newsletter to get latest updates and news</h1>
                </div>
                <div className="footer-subs-inputs">
                    <input className="footer-subs-inputs-email" type="email" placeholder="Enter your email"/>
                    <input className="footer-subs-inputs-button" type="button" value="Subscribe" />
                </div>
            </div>
            <div className="footer-info">
                <div className="footer-info-address">
                    <h4>Finstreet 118 2561 Fintown</h4>
                    <h4>test@test.com 123 4567 8910</h4>
                </div>
                <div className="footer-info-socialmedia">
                    <nav>
                        <ul>
                            <li> <img src={facebook} alt="facebook img" /></li>
                            <li> <img src={twitter} alt="twitter img" /></li>
                            <li> <img src={instagram} alt="instagram img" /></li>
                            <li> <img src={linkedin} alt="linkedin img" /></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </footer>
    )
}

export default Footer;