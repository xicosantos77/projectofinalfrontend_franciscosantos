import "./Categories-Blog.scss"; 
import React from "react";
import { useState } from "react";
import allCategories from "../../Data/categories";

const CategoriesBlog= ()=> {

    const [selectedCategory, setSelectedCategory] = useState(0);
    const [visibleRange, setVisibleRange] = useState([0,3]);

    const handleCategoryClick = (index) => {
        setSelectedCategory(index);
    }

    const handlePrevClick = () => {
        setVisibleRange((prevRange) => [
          Math.max(prevRange[0] - 1, 0),
          Math.max(prevRange[1] - 1, 3),
        ]);
    };
    
    const handleNextClick = () => {
        setVisibleRange((prevRange) => [
          Math.min(prevRange[0] + 1, allCategories.length - 4),
          Math.min(prevRange[1] + 1, allCategories.length - 1),
        ]);
    };

    return( 
        <div className="category-carroussel">
            <div className="category-carroussel-title">
                <h2>All Categories</h2>
            </div>

            <div className="category-carroussel-carroussel">
                {allCategories.slice(visibleRange[0],visibleRange[1] + 1).map((category,index) =>( 
                    <div 
                    className="category-carroussel-carroussel-item" 
                    key={index}
                    onClick={() => handleCategoryClick(index + visibleRange[0])} 
                    >
                        <img src={category.icon} alt="" />
                        <h3>{category.shortTitle}</h3>
                        <p>{category.shortDesc}</p>
                    </div>
                    ))};
            </div>

            <div className="category-carroussel-buttons">
                <div
                className="category-carroussel-buttons-prev"
                onClick={handlePrevClick}
                disabled={visibleRange[0] === 0}
                >
                    <h1>&lt;</h1>
                </div>
                
                <div
                className="category-carroussel-buttons-next"
                onClick={handleNextClick}
                disabled={visibleRange[1] === allCategories.length - 1}
                >
                    <h1>&gt;</h1>
                </div>
            </div>
        </div>
    )
}


export default CategoriesBlog;