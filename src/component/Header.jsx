import React from 'react'
import './Header.scss'
// import { Link } from 'react-router-dom'
// import image from './image/top.jpg'


const Header = () => {

    return (

        <header>
            <div className="hero">
                <div className="hero-left">
                    <nav >
                        <ul className="animate__animated animate__fadeInLeft">
                            {/* <li><Link to='/about'>ABOUT</Link></li>
                            <li><Link to='/work'>WORK</Link></li>
                            <li><Link to='/contact'>CONTACT</Link></li> */}
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#Work">WORK</a></li>
                            <li><a href="#Contact">CONTACT</a></li>
                            <li><a href="https://instagram.com" className="icon-b"><i className="fab fa-instagram" aria-hidden="true"></i> </a></li>
                        </ul>
                    </nav>
                    <div>
                        <img className='top-img animate__animated animate__fadeInLeft' src='/image/top4.jpg' alt="top" />

                    </div>
                </div>
                <div className="hero-right">
                    <div className="color-change">

                        <h1 className="name textAnimation">
                            <span className="c1">Y</span>
                            <span className="c2">u</span>
                            <span className="c3">r</span>
                            <span className="c4">i</span>
                            <span> </span>
                            <span className="c5">S</span>
                            <span className="c6">h</span>
                            <span className="c7">i</span>
                            <span className="c8">d</span>
                            <span className="c9">o</span>
                        </h1>
                    </div>
                    <img className="top2-img animate__animated animate__fadeInUp" src='/image/top2.jpg' alt="top" />
                    <div className="color-change">
                        <h2 className="animate__animated animate__fadeInUp">Be Yourself Be Happy</h2>
                    </div>

                    {/* <div className="color-change"> */}
                    {/* </div> */}
                </div>
            </div>
        </header>

    )
}

export default Header
