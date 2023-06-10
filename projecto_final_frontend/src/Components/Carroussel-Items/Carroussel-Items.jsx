import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import items from '../../Data/items';
import './Carroussel-Items.scss';

const CarrousselItems = () => {
    const [visibleRange, setVisibleRange] = useState([0, 2]);

    const handlePrevClick = () => {
        setVisibleRange((prevRange) => [
            Math.max(prevRange[0] - 1, 0),
            Math.max(prevRange[1] - 1, 2),
        ]);
    };

    const handleNextClick = () => {
        setVisibleRange((prevRange) => [
            Math.min(prevRange[0] + 1, items.length - 3),
            Math.min(prevRange[1] + 1, items.length - 1),
        ]);
    };

    return (
        <div className="carrousselItems">
            <div className="carrousselItems-title">
                <h2>What to read next:</h2>
            </div>
            <div className="carrousselItems-items">
                {items.slice(visibleRange[0], visibleRange[1] + 1).map((item, index) => (
                    <Link to={item.link} key={index} className="carrousselItems-items-item">
                        <div className="carrousselItems-items-item-photo">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="carrousselItems-items-item-text">
                            <p>
                                {item.author} | May, 2023
                            </p>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="carrousselItems-buttons">
                <div
                    className="carrousselItems-buttons-prev"
                    onClick={handlePrevClick}
                    disabled={visibleRange[0] === 0}
                >
                    <h1>&lt;</h1>
                </div>

                <div
                    className="carrousselItems-buttons-next"
                    onClick={handleNextClick}
                    disabled={visibleRange[1] === items.length - 1}
                >
                    <h1>&gt;</h1>
                </div>
            </div>
        </div>
    );
};

export default CarrousselItems;