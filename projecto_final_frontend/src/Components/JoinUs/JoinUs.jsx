import "./JoinUs.scss"; 
import React from "react";
import {Link} from "react-router-dom";

const JoinUs = () => {

    return(
        <div className="joinus">
            <div className="joinus-text">
                <h2>Join our team to be a part of our story!</h2>
                <p>We are always looking for challenge-seekers. Send us your info.</p>
            </div>
            <div className="joinus-button">
                <div><Link to="/ContactUs"><h2>Join Now</h2></Link></div>
            </div>
        </div>
    )
}

export default JoinUs;