import React from "react";
import "./Featured-Post.scss"; 
import {Link} from "react-router-dom";

const FeaturedPost = ()=> {
    return( 
        <div className="featuredPost">
            <div className="featuredPost-text">
                <h6>FEATURED POST</h6>
                <h2>Step-by-step guide to choosing great font pairs</h2>
                <label>By Francisco Santos</label>
                <p>Learn about common cellphone issues and discover solutions for fixing them.</p>

                <div className="featuredPost-text-button">
                    <Link to="/Post1"><h2>Read more &gt;</h2></Link>
                </div>
            </div>
            <div className="featuredPost-img"> 
                <img src="./Images-public/Carroussel/Images/image1.jpg" alt="" />
            </div>
        </div>
    )
}


export default FeaturedPost;