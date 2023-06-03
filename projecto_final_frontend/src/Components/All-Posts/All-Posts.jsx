import React from "react";
import "./All-Posts.scss"; 
import {Link} from "react-router-dom";
import items from "../../Data/items";
import {useState} from "react";

const AllPosts = () => {

    const [startIndex, setStartIndex] = useState(0);

    const displayItems = items.slice(startIndex, startIndex + 5); 

    const handlePrev = () =>{
        if(startIndex >= 5){
            setStartIndex(startIndex - 5);
        }
    };

    const handleNext = () =>{
        if(startIndex + 5 < items.length){
            setStartIndex(startIndex + 5);
        }
    };

    return(
        <div className="allPosts">
            <div className="allPosts-title">
                <h1>All Posts</h1>
            </div>
            <div className="allPosts-postList">
                {displayItems.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <div className="allPosts-postList-post" hey={index}>
                            <div className="allPosts-postList-post-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="allPosts-postList-post-text">
                                <h6>{item.category}</h6>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))};
            </div>
            <div className="allPosts-nav">
                <div className="testimonials-carousel-controls-prev" onClick={handlePrev}>
                    <h1>&lt; Prev</h1>
                </div>
                <div className="testimonials-carousel-controls-next" onClick={handleNext}>
                    <h1>Next &gt;</h1>
                </div>
            </div>
        </div>
    )
}

export default AllPosts;