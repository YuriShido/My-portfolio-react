import React from 'react'
import './Work.scss'
const Work = () => {
    return (
        <div id="Work">
            <div className="color-change">
            <h1 className="title">-WORK-</h1>
            </div>
            <div className="pc-photo">

            <div className="work-wrapper">

                <div className="work-container" >
                    <div className="work-box">
                        <a href="https://run-van-toilet.netlify.app/ ">
                            <img className="work-img" src="/image/washroomApp.png" alt="washroom App" />
                        </a>

                        <div>
                        <h2>WASHROOM WEB APP</h2>
                        {/* <p>React Sass Node Mongo DB</p> */}
                        <div className='useLng'>
                            <p className="lang washroom-lang">React</p>
                            <p className="lang washroom-lang">Sass</p>
                            <p className="lang washroom-lang">Node.js</p>
                            <p className="lang washroom-lang">MongoDB</p>
                            <p className="lang washroom-lang">GoogleMap API</p>
                        </div>
                        <p className="discription">The washroom app that you can find and add washroom location in Vancouver.</p>
                        </div>

                    </div>
                    <div className="work-box">
                        <a href="https://find-web-job-tweets.netlify.app/ ">
                            <img className="work-img" src="/image/find-tweets-app4.png" alt="find tweet app" />
                        </a>
                        <div>
                        <h2>FIND WEB JOB TWEETS</h2>
                        {/* <p>React Node</p> */}
                        <div className='useLng'>
                            <p className="lang">React</p>
                            <p className="lang">CSS3</p>
                            <p className="lang">Node.js</p>
                            <p className="lang">Twitter API</p>
                        </div>
                        <p className="discription">The finding web job tweets from twitter. This App also be able to search whatever user wants.</p>
                        </div>

                    </div>
                    <div className="work-box">
                        <a href="https://synapse65edmonds.ca/ ">
                            <img className="work-img" src="/image/synaps65.png" alt="clinic website" />
                        </a>
                        <div>

                        <h2>SYNAPSE65 CLINIC WEBSITE</h2>
                        {/* <p>React Node</p> */}
                        <div className='useLng'>
                            <p className="lang">WordPress</p>
                            <p className="lang">Photoshop</p>
                        </div>
                        <p className="discription">Health care clinic website. I worked for updating website.</p>
                        </div>

                    </div>
                    <div className="work-box">
                        <a href="https://c-plus-nousenjyou.netlify.app/ ">
                            <img className="work-img" src="/image/e-plus.png" alt="e-plus website" />
                        </a>
                        <div>
                        <h2>C-PLUS SPA WEBSITE</h2>
                        <div className='useLng'>
                            <p className="lang">HTML5</p>
                            <p className="lang">Sass</p>
                            <p className="lang">JavaScript</p>
                        </div>
                        <p className="discription">The Mobile massuse website that shows her business in Japan.</p>
                        </div>

                    </div>
                    <div className="work-box">
                        <a href="https://easymemo-app.netlify.app/ ">
                            <img className="work-img" src="/image/memoApp.png" alt="memo App" />
                        </a>
                        <div>
                        <h2>MEMO APP</h2>
                        <div className='useLng'>
                            <p className="lang">React</p>
                            <p className="lang">Redux</p>
                            <p className="lang">Material-UI</p>
                        </div>
                        <p className="discription">The Memo app that you can create your own memo that you want remember.</p>
                        </div>
                    </div>
                    <div className="work-box">
                        <a href="https://elastic-chandrasekhar-4dbe00.netlify.app/ ">
                            <img className="work-img" src="/image/weatherApp.png" alt="weather App" />
                        </a>
                        <div>
                        <h2>WEATHER BEER APP</h2>
                        <div className='useLng'>
                            <p className="lang">React</p>
                            <p className="lang">Sass</p>
                        </div>
                        {/* <p>React Sass</p> */}
                        <p className="discription">The Weather App that recomend suitble beer depends on the weather.</p>
                        </div>

                    </div>
                    
                        <h1 className="graphic">Graphic Design</h1>
                    <div className="work-box">
                        <img className="graphic-image" src="/image/Acupuncture.png" alt="acupuncture-flyer"/>
                        <img className="graphic-image" src="/image/Special-event.jpg" alt="special event flyer"/>
                        <img className="graphic-image" src="/image/Happyhour.jpg" alt="happy hour flyer"/>
                    </div>
                    
                </div>
                </div>
            {/* <div className="rightSide-color"></div> */}
            </div>
        </div>
    )
}

export default Work

