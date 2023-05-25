import "./Testimonials.scss"; 
import React from "react";
import { useState } from "react";
import authors from "../../Data/authors";


const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        if(activeIndex === 0){
            setActiveIndex(authors.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };
  
    const handleNext = () => {
        if(activeIndex === authors.length - 1){
            setActiveIndex (0);
       } else {
            setActiveIndex (activeIndex + 1);
       }
    };


    return (
        <div className="testimonials">
            <div className="testimonials-text">
                <h3>TESTIMONIALS</h3>
                <h2>What people say about our blog</h2>
                <p>
                We are very keen on meeting our clients' needs. If you were not satisfied, we are more than happy in listening to your needs in order to provide the best possible service!
                </p>
            </div>
        
            <div className="testimonials-carousel">
                <div className="testimonials-carousel-inner">
                {authors.map((authors, index) => (
                    <div
                    key={index}
                    className={`testimonials-carousel-slide ${
                        index === activeIndex ? "active" : ""
                    }`}
                    >
                        <div className="testimonials-carousel-content">
                            <h2>{authors.testimonial}</h2>
                        </div>
                        <div className="testimonials-carousel-content-author">
                            <div className="testimonials-carousel-content-author-photo">
                                <img src={authors.author} alt="" />
                                <div>
                                    <h2>{authors.name}</h2>
                                    <p>{authors.location}</p>
                                </div>
                            </div>
                            <div className="testimonials-carousel-controls">
                                <div className="testimonials-carousel-controls-prev" onClick={handlePrev}>
                                    <h1>&lt;</h1>
                                </div>
                                <div className="testimonials-carousel-controls-next" onClick={handleNext}>
                                    <h1>&gt;</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
      

}

export default Testimonials;