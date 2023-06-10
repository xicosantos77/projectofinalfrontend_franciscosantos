import React, { useRef } from 'react';
import "./ContactUs.scss";

const ContactUs = () => {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const optionInput = useRef(null);
    const messageInput = useRef(null);

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
        optionInput.current.value = 'yes';
        messageInput.current.value = '';
    };

    return (
        <div className="contactUs">
            <div className="contactUs-text">
                <h6>CONTACT US</h6>
                <h1>Let's Start a Conversation</h1>
                <p>Contact us, whether if you want to be a part of our team, if you want any info or just share your love!</p>
            </div>
            <div className="contactUs-info">
                <div className="contactUs-info-workingHours">
                    <p>WORKING HOURS</p>
                    <br />
                    <h5>Monday to Friday</h5>
                    <h5>9:00 AM to 8:00 PM</h5>
                    <p>Our Support Team is available 24/7.</p>
                </div>
                <div className="contactUs-info-contactUs">
                    <p>CONTACT US</p>
                    <br />
                    <h5>020 7993 2905</h5>
                    <p>general@tello.com</p>
                </div>
            </div>
            <div className="contactUs-form">
                <div className="contactUs-form-inputs">
                    <input type="text" placeholder="Full Name" ref={nameInput} required />
                    <input type="email" placeholder="Your Email" ref={emailInput} required />
                    <select ref={optionInput} placeholder='Select the Category' required>
                        <option value="Select Your category:">Select your category</option>
                        <option value="Services">Services</option>
                        <option value="Device Repairs">Device Repairs</option>
                        <option value="Pricing and Packages">Pricing and Packages</option>
                        <option value="Warranty and Guarantees">Warranty and Guarantees</option>
                        <option value="Inquiries">Inquiries</option>
                        <option value="Work With Us">Work With Us</option>
                        <option value="General">General</option>
                    </select>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Message" ref={messageInput} required></textarea>
                </div>
                <div className="contactUs-form-button">
                    <h2 onClick={handleSendMessage}>Send Message</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
