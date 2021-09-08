import React from 'react'
import './Contact.scss'

const Contact = () => {
    return (
        <div id="Contact"> 
            <h1 className="title">-CONTACT-</h1>
            <div className="contact-container">
                <div>
                    <h2>Reach me here!</h2>
                    <a href="mailto:yurishido57@gmail.com" className="email"><p>yurishido57@gmail.com</p></a>
                    <a href="https://instagram.com" className="icon-b"><i className="fab fa-instagram" aria-hidden="true"></i> </a>
                    <a href="https://www.linkedin.com/in/yuri-shido-b139b621b/" className="icon-b"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/YuriShido" className="icon-b"><i className="fab fa-github"></i></a>
                </div>
                <div></div>
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