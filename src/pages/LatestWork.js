import React from 'react'
// Stylesheet
import '../styles/LatestWork.scss'
import Portfolio from '../assets/img/portfolio.png';

const About = () => {

    return (
        <div className="latestwork-container container-fluid">
            <div className="innerLW-container shadow-lg">
                <div className="row mx-5 my-3 py-5">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="fw-bold pb-2">Latest Work </h2>
                        <h4 className="fw-bold py-2" style={{ color: "#198754" }}>Developer Portfolio</h4>
                        <p className="latestwork-desc"> I am currently working on this website! This project started during my internship at TELUS International Philippines, Inc.</p>
                        <div className="col-10 col-sm-10 pb-sm-4">
                            <button type="button" className="lw-btn btn btn-dark">HTML</button>
                            <button type="button" className="lw-btn btn btn-dark">SCSS</button>
                            <button type="button" className="lw-btn btn btn-dark">Bootstrap</button>
                            <button type="button" className="lw-btn btn btn-dark">React</button>
                            <button type="button" className="lw-btn btn btn-dark">EmailJS</button>
                            <button type="button" className="lw-btn btn btn-dark">GitHub</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div class="terminal-window">
                            <div class="terminal-title">
                                <div class="terminal-title-btn">
                                    <span class="btn-closebtn">&#x02022;</span>
                                    <span class="btn-mini">&#x02022;</span>
                                    <span class="btn-max">&#x02022;</span>
                                </div>
                                <div></div>
                            </div>
                            <div class="terminal-console">
                                <img className="lw-img" src={Portfolio} />
                                {/* width="510" height="295" */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About