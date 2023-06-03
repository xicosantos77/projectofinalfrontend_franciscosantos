import React from "react";
import FeaturedPost from "../Components/Featured-Post/Featured-Post";
import AllPosts from "../Components/All-Posts/All-Posts";
import JoinUs from "../Components/JoinUs/JoinUs";
import CategoriesBlog from "../Components/Categories-Blog/Categories-Blog";

const Blog= ()=> {

    return( 
        <div>
            <FeaturedPost></FeaturedPost>
            <AllPosts></AllPosts>
            <CategoriesBlog></CategoriesBlog>
            <JoinUs></JoinUs>
        </div>
    )
}


export default Blog;