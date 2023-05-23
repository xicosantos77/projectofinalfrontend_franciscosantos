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
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, magni.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, vel quasi? Eligendi numquam nulla esse temporibus molestiae eos, quas accusantium.</p>
                        <div><Link to="/AboutUs">Read More &gt;</Link></div>
                    </div>
                    <div className="slider-articles-post2">
                        <h4>OUR MISSON</h4>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, praesentium nemo! Modi in quae illum aperiam dolores nobis placeat cumque unde esse, autem deleniti accusantium nulla totam! Iure quo blanditiis ipsum enim. Maiores temporibus nostrum veniam rem enim. Mollitia, aliquam.</p>
                    </div>
                </div>
                <div className={`slider-article-yellow ${selectedSlide === 0 ? 'active':''}`}>
                    <div className="slider-articles-post1">
                        <h3>ABOUT US</h3>
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, magni.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, vel quasi? Eligendi numquam nulla esse temporibus molestiae eos, quas accusantium.</p>
                        <div><Link to="/AboutUs">Read More &gt;</Link></div>
                    </div>
                    <div className="slider-articles-post2">
                        <h4>OUR MISSON</h4>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, praesentium nemo! Modi in quae illum aperiam dolores nobis placeat cumque unde esse, autem deleniti accusantium nulla totam! Iure quo blanditiis ipsum enim. Maiores temporibus nostrum veniam rem enim. Mollitia, aliquam.</p>
                    </div>
                </div>
                <div className={`slider-article-blue ${selectedSlide === 2 ? 'active':''}`}>
                    <div className="slider-articles-post1">
                        <h3>WHY DO WE DO IT?</h3>
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, magni.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, vel quasi? Eligendi numquam nulla esse temporibus molestiae eos, quas accusantium.</p>
                        <div><Link to="/AboutUs">Read More &gt;</Link></div>
                    </div>
                    <div className="slider-articles-post2">
                        <h4>OUR MISSON</h4>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, praesentium nemo! Modi in quae illum aperiam dolores nobis placeat cumque unde esse, autem deleniti accusantium nulla totam! Iure quo blanditiis ipsum enim. Maiores temporibus nostrum veniam rem enim. Mollitia, aliquam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider; 