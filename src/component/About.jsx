import React from 'react'
import './About.scss'


const About = () => {
    return (
        <div id="about">

            <div className="color-change">
                <h1 className="title animate__animated animate__fadeInLeft">-ABOUT ME-</h1>
            </div>

            <div className="about-container">
            {/* <img className="about-img2" src="/image/sunset-jamp2.jpg" alt="jump" /> */}

                <div >

                </div>
                <div className="about-detail">
                    <h2>Front-end Web Developer / Web Designer</h2>
                    {/* <p>Born in Japan.
                    Used to work in bank, moved to Canada from 2018.
                    Start learning coding in 2020. Design and make website. Keep learning other languages.</p> */}
                    <p>Front-end Web Developer, Web Designer based in Vancouver.<br /> 
                    Passionate about creating clear designed websites and applications that make people's lives easier. <br />
                    Actively looking for new opportunities in web design and development.</p>
                    <h3>Skills</h3>
                    <div className="language-outer">

                        <div className="language-div">
                            <img className="language-icon" src="/image/html.png" alt="html icon" />
                            <p>HTML</p>
                        </div>
                        <div className="language-div">
                            <img className="language-icon" src="/image/css.png" alt="css icon" />
                            <p>CSS</p>
                        </div>
                        <div className="language-div">
                            <img className="language-icon" src="/image/javascript.png" alt="Javascript icon" />
                            <p>JavaScript</p>
                        </div>
                        <div className="language-div">
                            <img className="language-icon" src="/image/sass.png" alt="Sass icon" />
                            <p>Sass</p>
                        </div>
                        <div className="language-div">
                            <img className="language-icon" src="/image/react.png" alt="React icon" />
                            <p>React</p>
                        </div>
                        <div className="language-div">
                            <img className="language-icon" src="/image/photoshop.png" alt="Photoshop icon" />
                            <p>Photoshop</p>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    {/* <img className="about-image-right" src="/image/camera.jpg" alt="jamp" /> */}

                </div>

            </div>
        </div>

    )
}

export default About