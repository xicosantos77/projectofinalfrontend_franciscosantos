import React from "react"; 

import Carroussel from "../Components/Carroussel-Banners/Carroussel";
import Post_Section from "../Components/Post-Section/Post-Section";
import Slider from "../Components/Slider/Slider";
import CategoryCarroussel from "../Components/Category-Carroussel/Category-Carrousel";
import Authors from "../Components/Authors/Authors";
import Testimonials from "../Components/Testimonials/Testimonials";
import JoinUs from "../Components/JoinUs/JoinUs";


const Home= ()=> {

    return( 
        <div>
            <Carroussel></Carroussel>
            <Post_Section></Post_Section>
            <Slider></Slider>
            <CategoryCarroussel></CategoryCarroussel>
            <Authors></Authors>
            <Testimonials></Testimonials>
            <JoinUs></JoinUs>
        </div>
    )
}

export default Home;