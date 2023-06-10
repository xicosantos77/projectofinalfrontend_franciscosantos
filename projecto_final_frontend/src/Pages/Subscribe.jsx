import React, { useRef } from 'react';
import "./Subscribe.scss";

const Subscribe = () => {
    const nameInput = useRef(null);
    const emailInput = useRef(null);

    const handleSendMessage = () => {
        const name = nameInput.current.value;
        const email = emailInput.current.value;

        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        nameInput.current.value = '';
        emailInput.current.value = '';
    };

    return (
        <div className="subscribe">
            <div className="subscribe-text">
                <h6>SUBSCRIBE US</h6>
                <h1>Keep up to date with our news!</h1>
            </div>
            <div className="subscribe-form">
                <div className="subscribe-form-inputs">
                    <input type="text" placeholder="Full Name" ref={nameInput} required />
                    <input type="email" placeholder="Your Email" ref={emailInput} required />
                </div>
                <div className="subscribe-form-button">
                    <h2 onClick={handleSendMessage}>Subscribe</h2>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
