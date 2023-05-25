import "./Post-Section.scss"; 
import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 
import items from "../../Data/items";

const Post_Section = ()=>{

    const [selectedPost, setSelectedPost] = useState(0);

    const handlePostClick = (index) => {
        setSelectedPost(index);
    }

    return(
        <div className="postsection">
            <div className="postsection-featuredposts">
                <div className="postsection-featuredposts-title">
                    <h2>Featured Posts</h2>
                </div>
                <div className="postsection-featuredposts-content">
                    <div className="postsection-featuredposts-content-img">
                        <img src={items[selectedPost].image} alt="" />
                    </div>
                    <div className="postsection-featuredposts-content-desc">
                        <p>{items[selectedPost].author} | May, 2023</p>
                        <h2>{items[selectedPost].title}</h2>
                        <p>{items[selectedPost].description}</p>
                        <div className="postsection-featuredposts-content-desc-button">
                            <Link to={items[selectedPost].link}><h2>See more &gt;</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="postsection-allposts">
                <div className="postsection-allposts-nav">
                    <div className="postsection-allposts-nav-title">
                        <h2>All Posts</h2>
                    </div>
                    <div className="postsection-allposts-nav-link">
                        <p><Link to="Blog">All Posts &gt;</Link></p>
                    </div>
                </div>
                <div className="postsection-allposts-list">
                    {items.map((post, index) => ( 

                    <div className="postsection-allposts-list-post" 
                    key={index}
                    onClick={() => handlePostClick(index)}
                    >
                        <p>{post.author}</p>
                        <h2>{post.title}</h2>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Post_Section;