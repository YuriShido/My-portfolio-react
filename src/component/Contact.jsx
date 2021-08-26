import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <div id="Contact"> 
            <h1 className="title">-CONTACT-</h1>
            <div className="contact-container">
                <div>
                    <h2>Please contact me!</h2>
                    <a href="mailto:sydonce57@gmail.com" className="email"><p>sydonce57@gmail.com</p></a>
                    <a href="https://instagram.com" className="icon-b"><i className="fab fa-instagram" aria-hidden="true"></i> </a>
                </div>
            </div>
                <div className="img-box">
                    {/* <img src="/image/contact.jpg" alt="jeans"/> */}
                </div>
                <div className="img-box-right">
                    
                </div>
        </div>
    )
}

export default Contact