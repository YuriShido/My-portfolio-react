import React from 'react'
import './Header.scss'
// import image from './image/top.jpg'


const Header = () => {
    return (
        <>
        <header>
            <div className="hero">
                <div className="hero-left">
                    <nav >
                        <ul>
                            <li>ABOUT</li>
                            <li>WORK</li>
                            <li>CONTACT</li>
                            <li><a href="https://instagram.com" class="icon-b"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </nav>
                    <div>
                       <img className='top-img' src='/image/top.jpg' alt="top"/> 

                    </div>
                </div>
                <div className="hero-right">
                    <h1 className="name">Yuri Shido</h1>
                    <h2>Be Yourself Be Happy </h2>
                    <img className="top2-img" src='/image/top2.jpg' alt="top" />
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
