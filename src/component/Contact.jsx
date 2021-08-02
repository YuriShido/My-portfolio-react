import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <div id="Contact"> 
            <h1 className="title">-CONTACT-</h1>
            <div className="contact-container">
                <div>
                    <h2>Please contact me!</h2>
                    <p>sydonce57@gmail.com</p>
                    <a href="https://instagram.com" class="icon-b"><i class="fab fa-instagram" aria-hidden="true"></i> </a>
                </div>
                <div className="img-box">
                    <img src="/image/contact.jpg" alt="jeans"/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Contact
