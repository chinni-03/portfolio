import React from "react";
import { Link } from 'react-router-dom';

function Contact () {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <>
            <div className="tools-page">
                <p className="works-title font-52">Get in touch</p>
                <form className="container-fluid ms-auto me-auto w-30">
                    <legend>Drop in a message</legend>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div>
                        <label htmlFor="">Email Address:</label>
                        <input type="email" placeholder="Enter your email address" required/>
                    </div>
                    <div>
                        <label className="textarea" htmlFor="">Message:</label>
                        <textarea rows={8} cols={30} placeholder="Enter your message for me"></textarea>
                    </div>
                    <Link style={linkStyle} to='mailto:harshinivk12@gmail.com'><button className="send-btn">Send</button></Link>
                </form>
            </div>
        </>
    );
}

export default Contact;