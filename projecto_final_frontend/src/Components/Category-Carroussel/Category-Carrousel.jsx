import "./Category-Carrousel.scss"; 
import React from "react";
import {Link} from "react-router-dom";

const CategoryCarroussel= ()=> {

    return( 
        <div className="category-carroussel">
            <div className="category-carroussel-title">
                <h2>Choose a Category</h2>
            </div>
            <div className="category-carroussel-carroussel">
                <div className="category-carroussel-carroussel-item item-1">
                    <img src='./Images-public/Carroussel-Categories/Icons/rocket.png' alt="" />
                    <h3>Title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="category-carroussel-carroussel-item item-2">
                    <img src='./Images-public/Carroussel-Categories/Icons/rocket.png' alt="" />
                    <h3>Title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="category-carroussel-carroussel-item item-3">
                    <img src='./Images-public/Carroussel-Categories/Icons/rocket.png' alt="" />
                    <h3>Title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="category-carroussel-carroussel-item item-4">
                    <img src='./Images-public/Carroussel-Categories/Icons/rocket.png' alt="" />
                    <h3>Title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
            <div className="category-carroussel-display">
                <div className="category-carroussel-display-img">
                    <img src="Images-public/Carroussel-Categories/Images/image1.jpg" alt="" />
                </div>
                <div className="category-carroussel-display-desc">
                    <h3>WHY WE STARTED</h3>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus magni, aliquam nihil repellendus pariatur asperiores quos id voluptas eius a nisi culpa officia aliquid corporis consectetur adipisci accusamus! Magni, repellat?</p>
                    <div><Link to="/AboutUs">Discover our story &gt;</Link></div>
                </div>
            </div>

        </div>
    )
}


export default CategoryCarroussel;