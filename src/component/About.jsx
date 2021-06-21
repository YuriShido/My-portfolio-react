import React from 'react'
import './About.scss'

const About = () => {
    return (
        <div id="about">
            <h1 className="title">-ABOUT Me-</h1>

            <div className="about-container">
                <img className="about-img" src="/image/sunset-jamp2.jpg" alt="jump" />
                <div >

                </div>
                <div className="about-detail">
                    <h3>Front-end Web developer</h3>
                    <p>Born in Japan.
                    Used to work in bank, moved to Canada from 2018.
                    Start learning coding in 2020. Design and make website. Keep learning other languages.</p>

                    <h4>Language</h4>
                    <div class="language-outer">

                        <div class="language-div">
                            <img class="language-icon" src="/image/html.png" alt="html icon" />
                            <p>HTML</p>
                        </div>
                        <div class="language-div">
                            <img class="language-icon" src="/image/css.png" alt="css icon" />
                            <p>CSS</p>
                        </div>
                        <div class="language-div">
                            <img class="language-icon" src="/image/javascript.png" alt="Javascript icon" />
                            <p>JavaScript</p>
                        </div>
                        <div class="language-div">
                            <img class="language-icon" src="/image/react.png" alt="React icon" />
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
