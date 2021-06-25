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
                    <a href="https://easymemo-app.netlify.app/ ">
                        <img className="work-img" src="/image/memoApp.png" alt="memo App"/>
                    </a>
                    <h3>Memo App</h3>
                    <p>Using React Redux</p>
                </div>
                <div className="work-box">
                    <a href="https://easymemo-app.netlify.app/ ">
                        <img className="work-img" src="/image/memoApp.png" alt="memo App"/>
                    </a>
                    <h3>Memo App</h3>
                    <p>Using React Redux</p>
                </div>
                <div className="work-box">
                    <a href="https://easymemo-app.netlify.app/ ">
                        <img className="work-img" src="/image/memoApp.png" alt="memo App"/>
                    </a>
                    <h3>Memo App</h3>
                    <p>Using React Redux</p>
                </div>
                <div className="work-box">
                    <a href="https://easymemo-app.netlify.app/ ">
                        <img className="work-img" src="/image/memoApp.png" alt="memo App"/>
                    </a>
                    <h3>Memo App</h3>
                    <p>Using React Redux</p>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Work

