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
            We are very keen on meeting our clients needs. If you were not satidfied we are more then happy in listening to your needs ir order to provide the best possible service!
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
                      <div>
                        <img src={authors.author} alt="" />
                        <h2>{authors.name}</h2>
                      </div>
                      <p>{authors.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonials-carousel-controls">
              <div
                className="testimonials-carousel-control testimonials-carousel-control-prev"
                onClick={handlePrev}
              >
                &lt;
              </div>
              <div
                className="testimonials-carousel-control testimonials-carousel-control-next"
                onClick={handleNext}
              >
                &gt;
              </div>
            </div>
          </div>
        </div>
    );

}

export default Testimonials;