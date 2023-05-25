import "./Slider.scss"; 
import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Slider = ()=>{
    const [selectedSlide, setSelectedSlide] = useState(0);

    const handleSlideClick = (index) => {
        setSelectedSlide(index);
    };

    return(
        <div className="slider">
            <div className="slider-selector">
                <div className={`slider-selector-white ${selectedSlide === 1 ? 'active':''}`} onClick={() => handleSlideClick(1)}></div>
                <div className={`slider-selector-yellow ${selectedSlide === 0 ? 'active':''}`} onClick={() => handleSlideClick(0)}></div>
                <div className={`slider-selector-blue ${selectedSlide === 2 ? 'active':''}`} onClick={() => handleSlideClick(2)}></div>
            </div>
            <div className="slider-articles">
                <div className={`slider-article-white ${selectedSlide === 1 ? 'active':''}`}>
                    <div className="slider-articles-post1">
                        <h3>GET TO KNOW US</h3>
                        <h2>Meet our team, and our amazing service!</h2>
                        <p>Get acquainted with the faces behind our exceptional service.</p>
                        <div><Link to="/AboutUs">Read More &gt;</Link></div>
                    </div>
                    <div className="slider-articles-post2">
                        <h4>OUR MISSON</h4>
                        <h3>Our Expertise and Dedication</h3>
                        <p>Our team of skilled technicians is passionate about delivering top-notch cellphone and computer repairs. With years of experience, we are committed to providing reliable solutions and exceptional customer service.</p>
                    </div>
                </div>
                <div className={`slider-article-yellow ${selectedSlide === 0 ? 'active':''}`}>
                    <div className="slider-articles-post1">
                        <h3>ABOUT US</h3>
                        <h2>Get to know our story.</h2>
                        <p>Discover how our journey in cellphone and computer repairs began.</p>
                        <div><Link to="/AboutUs">Read More &gt;</Link></div>
                    </div>
                    <div className="slider-articles-post2">
                        <h4>OUR MISSON</h4>
                        <h3>Commitment to Excellence</h3>
                        <p>We started with a vision to provide reliable and affordable repairs. With a focus on quality and customer satisfaction, we have grown into a trusted name in the industry. Our commitment to excellence drives everything we do.</p>
                    </div>
                </div>
                <div className={`slider-article-blue ${selectedSlide === 2 ? 'active':''}`}>
                    <div className="slider-articles-post1">
                        <h3>WHY DO WE DO IT?</h3>
                        <h2>What is our Purpose?</h2>
                        <p> Learn why we are passionate about repairing cellphones and computers.</p>
                        <div><Link to="/AboutUs">Read More &gt;</Link></div>
                    </div>
                    <div className="slider-articles-post2">
                        <h4>OUR MISSON</h4>
                        <h3>Empowering Your Digital World</h3>
                        <p> We believe in the power of technology to connect and empower individuals. Our mission is to ensure your devices work flawlessly, enabling you to navigate the digital world with confidence and convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider; 