import React from 'react'
import './AboutNew.scss'


const About2 = () => {
    return (
        <div id="about2">

            <div className="color-change">
                <h1 className="title">-ABOUT Me-</h1>
            </div>

            <div className="about-container2">
            {/* <img className="about-img2" src="/image/sunset-jamp2.jpg" alt="jump" /> */}

                <div >

                </div>
                <div className="about-detail2">
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
                <div className="img-box">
                    {/* <img className="about-image-right" src="/image/camera.jpg" alt="jamp" /> */}

                </div>

            </div>
        </div>

    )
}

export default About2