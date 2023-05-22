import "./Carroussel.scss"; 
import React, {useState} from 'react';
import {useEffect} from "react";

const Carroussel = ()=> {

    const [activeIndex, setActiveIndex] = useState(0); 

    //Botões prev e next

    const handlePrev = ()=> {
        if(activeIndex === 0){
            setActiveIndex(items.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNext = ()=> {
       if(activeIndex === items.length - 1){
            setActiveIndex (0);
       } else {
            setActiveIndex (activeIndex + 1);
       }
    };

    // Timer para transição automática do carroussel

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
    
        return () => {
          clearInterval(timer);
        };
    }, [activeIndex]);

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
                        <h6 className="carroussel-item-textbox-title1">
                            {item.postedOn}
                        </h6>
                        <h1 className="carroussel-item-textbox-title2">
                            {item.title}
                        </h1>
                        <h6 className="carroussel-item-textbox-author">
                            {item.author}
                        </h6>
                        <p className="carroussel-item-textbox-desc">
                            {item.description}
                        </p>
                        <input className="carroussel-item-textbox-button" type="button" value={item.buttonLabel} />
                    </div>
                </div>
              </div>
            ))}
            </div>
            <div className="carroussel-navigation">
                <div className="prev-button" onClick={handlePrev}>
                    <h1>&lt;</h1>
                </div>
                <div className="carroussel-navigation-progressbar">
                {items.map((_, index) => (
                    <div
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    key={index}
                    ></div>
                ))}
                </div>
                <div className="next-button" onClick={handleNext}>
                    <h1>&gt;</h1>
                </div>
            </div>
        </div>
    );
};

export default Carroussel;