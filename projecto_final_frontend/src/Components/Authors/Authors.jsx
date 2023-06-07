import "./Authors.scss"; 
import React from "react";
import authors from "../../Data/authors";


const Authors= ()=> {

    return( 
        <div className="authors">
            <div className="authors-title">
                <h2>List of Authors</h2>
            </div>
            <div className="authors-authors">
                    {authors.map((post, index) => ( 
                        <div className="authors-authors-item" key={index}>
                            <img src={post.author} alt="" />
                            <h3>{post.name}</h3>
                            <p>{post.func}</p>
                            <div className="authors-authors-item-social">
                                <a href={post.facebook}><img src='Images-public/Authors/Images/Icons/facebook.png' alt="" /></a>
                                <a href={post.instagram}><img src='Images-public/Authors/Images/Icons/Instagram.png' alt="" /></a>
                                <a href={post.linkedin}><img src='Images-public/Authors/Images/Icons/Linkedin.png' alt="" /></a>
                                <a href={post.twitter}><img src='Images-public/Authors/Images/Icons/twitter.png' alt="" /></a>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="authors-featured">
                <div className="authors-featured-icon">
                    <img src='Images-public/Authors/Images/Featured/Featured in.png' alt="" />
                </div>
                <div className="authors-featured-icon">
                    <img src='Images-public/Authors/Images/Featured/Logo 1.png' alt="" />
                </div>
                <div className="authors-featured-icon">
                    <img src='Images-public/Authors/Images/Featured/Logo 2.png' alt="" />
                </div>
                <div className="authors-featured-icon">
                    <img src='Images-public/Authors/Images/Featured/Logo 3.png' alt="" />
                </div>
                <div className="authors-featured-icon">
                    <img src='Images-public/Authors/Images/Featured/Logo 4.png' alt="" />
                </div>
                <div className="authors-featured-icon">
                    <img src='Images-public/Authors/Images/Featured/Logo 5.png' alt="" />
                </div>
            </div>
        </div>
    )
}


export default Authors;