import React from 'react'
import './Work.scss'
const Work = () => {
    return (
        <div id="Work">
            {/* <div className="color-change"> */}
            <h1 className="title">-WORK-</h1>
            {/* </div> */}
            <div className="pc-photo"></div>
            <div className="work-wrapper">

                <div className="work-container" >
                    <div className="work-box">
                        <a href="https://run-van-toilet.netlify.app/ ">
                            <img className="work-img" src="/image/washroomApp.png" alt="washroom App" />
                        </a>
                        <h2>Washroom App</h2>
                        {/* <p>React Sass Node Mongo DB</p> */}
                        <div className='useLng'>
                            <p className="lang washroom-lang">React</p>
                            <p className="lang washroom-lang">Sass</p>
                            <p className="lang washroom-lang">Node</p>
                            <p className="lang washroom-lang">MongoDB</p>
                            <p className="lang washroom-lang">GoogleMap API</p>
                        </div>
                        <p className="discription">The washroom app that you can find and add washroom location in Vancouver.</p>

                    </div><div className="work-box">
                        <a href="https://find-web-job-tweets.netlify.app/ ">
                            <img className="work-img" src="/image/find-tweets-app4.png" alt="find tweet app" />
                        </a>
                        <h2>Find Web Job Tweets</h2>
                        {/* <p>React Node</p> */}
                        <div className='useLng'>
                            <p className="lang">React</p>
                            <p className="lang">CSS3</p>
                            <p className="lang">Node.js</p>
                            <p className="lang">Twitter API</p>
                        </div>
                        <p className="discription">The finding web job tweets from twitter. This App also be able to search whatever user wants.</p>

                    </div>
                    <div className="work-box">
                        <a href="https://easymemo-app.netlify.app/ ">
                            <img className="work-img" src="/image/memoApp.png" alt="memo App" />
                        </a>
                        <h2>Memo App</h2>
                        <div className='useLng'>
                            <p className="lang">React</p>
                            <p className="lang">Redux</p>
                            <p className="lang">Material-UI</p>
                        </div>
                        <p className="discription">The Memo app that you can create your own memo that you want remember.</p>
                    </div>
                    <div className="work-box">
                        <a href="https://elastic-chandrasekhar-4dbe00.netlify.app/ ">
                            <img className="work-img" src="/image/weatherApp.png" alt="weather App" />
                        </a>
                        <h2>Weather Beer App</h2>
                        <div className='useLng'>
                            <p className="lang">React</p>
                            <p className="lang">Sass</p>
                        </div>
                        {/* <p>React Sass</p> */}
                        <p className="discription">The Weather App that recomend suitble beer depends on the weather.</p>

                    </div>

                    <div className="work-box">
                        <a href="https://c-plus-nousenjyou.netlify.app/ ">
                            <img className="work-img" src="/image/e-plus.png" alt="e-plus website" />
                        </a>
                        <h2>e-plus spa webpage</h2>
                        <div className='useLng'>
                            <p className="lang">HTML5</p>
                            <p className="lang">Sass</p>
                            <p className="lang">JavaScript</p>
                        </div>
                        <p className="discription">The Mobile massuse website that shows her business in Japan.</p>

                    </div>
                    {/* <div className="work-box">
                    <a href="https://easymemo-app.netlify.app/ ">
                        <img className="work-img" src="/image/memoApp.png" alt="memo App"/>
                    </a>
                    <h3>Memo App</h3>
                    <p>Using React Redux</p>
                </div> */}

                </div>
            </div>
            <div className="rightSide-color"></div>
        </div>
    )
}

export default Work

