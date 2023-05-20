import "./Carroussel.scss"; 
import React, {useState} from 'react';

const Carroussel = ()=> {

    const [activeIndex, setActiveIndex] = useState(0); 

    //Botões prev e next

    const handlePrev = ()=> {
      //  setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
        if(activeIndex === 0){
            setActiveIndex(items.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNext = ()=> {
       // setActiveIndex((prevIndex) => (prevIndex === items.length ? items.length - 1 : prevIndex + 1));
       if(activeIndex === items.length - 1){
            setActiveIndex (0);
       } else {
            setActiveIndex (activeIndex + 1);
       }
    };

    // Array de items para o carroussel

    const items = [
        {
            image: './Images-public/Carroussel/Images/image1.jpg',
            postedOn: 'POSTED ON STARTUP',
            title: 'Step-by-step guide to choosing great font pairs',
            author: 'By Francisco Santos | May 26, 2023',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nisi soluta deleniti iusto aut ipsum. Incidunt maiores cumque magnam fugiat?',
            buttonLabel: 'Read More >'
        }, 
        {
            image: './Images-public/Carroussel/Images/image2.jpg',
            postedOn: 'POSTED ON STARTUP',
            title: 'Step-by-step guide to choosing great font pairs',
            author: 'By Francisco Santos | May 26, 2023',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nisi soluta deleniti iusto aut ipsum. Incidunt maiores cumque magnam fugiat?',
            buttonLabel: 'Read More >'
        }, 
        {
            image: './Images-public/Carroussel/Images/image3.jpg',
            postedOn: 'POSTED ON STARTUP',
            title: 'Step-by-step guide to choosing great font pairs',
            author: 'By Francisco Santos | May 26, 2023',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nisi soluta deleniti iusto aut ipsum. Incidunt maiores cumque magnam fugiat?',
            buttonLabel: 'Read More >'
        }, 
        {
            image: './Images-public/Carroussel/Images/image4.jpg',
            postedOn: 'POSTED ON STARTUP',
            title: 'Step-by-step guide to choosing great font pairs',
            author: 'By Francisco Santos | May 26, 2023',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nisi soluta deleniti iusto aut ipsum. Incidunt maiores cumque magnam fugiat?',
            buttonLabel: 'Read More >'
        }, 
        {
            image: './Images-public/Carroussel/Images/image5.jpg',
            postedOn: 'POSTED ON STARTUP',
            title: 'Step-by-step guide to choosing great font pairs',
            author: 'By Francisco Santos | May 26, 2023',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nisi soluta deleniti iusto aut ipsum. Incidunt maiores cumque magnam fugiat?',
            buttonLabel: 'Read More >'
        }, 
        {
            image: './Images-public/Carroussel/Images/image6.jpg',
            postedOn: 'POSTED ON STARTUP',
            title: 'Step-by-step guide to choosing great font pairs',
            author: 'By Francisco Santos | May 26, 2023',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nisi soluta deleniti iusto aut ipsum. Incidunt maiores cumque magnam fugiat?',
            buttonLabel: 'Read More >'
        }, 
    ]

    return (
        <div className="carroussel">
          <div className="carroussel-inner">
            {items.map((item, index) => (
                <div
                className={`carroussel-item ${index === activeIndex ? 'active' : 'hidden'}`}
                key={index}
                >

                <div className="carroussel-item-img">
                  <img src={item.image} alt={`Item ${index + 1}`} />
                
                    <div className="carroussel-item-textbox">
                        <h6>{item.postedOn}</h6>
                        <h1>{item.title}</h1>
                        <h6>{item.author}</h6>
                        <p>{item.description}</p>
                        <input type="button" value={item.buttonLabel} />
                    </div>

                </div>
              </div>
            ))}
          </div>
          <div className="carroussel-navigation">
            <button className="prev-button" onClick={handlePrev}>
              Previous
            </button>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        {/*
          <div className="carousel-progress">
            {items.map((_, index) => (
              <div
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                key={index}
              ></div>
            ))}
          </div>
            */}
        </div>
    );
};

export default Carroussel;