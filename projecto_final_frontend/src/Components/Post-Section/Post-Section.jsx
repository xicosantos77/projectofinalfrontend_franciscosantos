import "./Post-Section.scss"; 
import React, {useState} from 'react';
import {Link} from 'react-router-dom'; 

const Post_Section = ()=>{

    const allPosts = [
        {
            image: 'Images-public/Post_Section/Images/image1.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post1'
        },
        {
            image: 'Images-public/Post_Section/Images/image2.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post2'
        },
        {
            image: 'Images-public/Post_Section/Images/image3.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post3'
        },
        {
            image: 'Images-public/Post_Section/Images/image4.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post4'
        },
        {
            image: 'Images-public/Post_Section/Images/image5.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post5'
        },
        {
            image: 'Images-public/Post_Section/Images/image6.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post6'
        },
        {
            image: 'Images-public/Post_Section/Images/image1.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post7'
        },
        {
            image: 'Images-public/Post_Section/Images/image2.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post8'
        }, 
        {
            image: 'Images-public/Post_Section/Images/image3.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post9'
        },
        {
            image: 'Images-public/Post_Section/Images/image4.jpg',
            author: 'By Francisco Santos',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat ducimus doloremque sequi adipisci quod vitae dicta, iste corporis laudantium!',
            link: '/Post10'
        }
    ];

    //para selecionar cada post

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
                        <img src={allPosts[selectedPost].image} alt="" />
                    </div>
                    <div className="postsection-featuredposts-content-desc">
                        <p>{allPosts[selectedPost].author} | May, 2023</p>
                        <h2>{allPosts[selectedPost].title}</h2>
                        <p>{allPosts[selectedPost].desc}</p>
                        <div className="postsection-featuredposts-content-desc-button">
                            <Link to={allPosts[selectedPost].link}><h2>See more &gt;</h2></Link>
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
                    {allPosts.map((post, index) => ( 

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