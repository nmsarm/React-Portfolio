import React from 'react'
// Stylesheet
import '../styles/LatestWork.scss'
import Portfolio from '../assets/img/portfolio.png';

const About = () => {

    return (
        <div className="latestwork-container container-fluid">
            <div className="innerLW-container shadow-lg">
                <div className="row mx-lg-5 mx-4 my-3 py-5">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="fw-bold pb-2">Latest Work </h2>
                        <h4 className="fw-bold py-2" style={{ color: "#198754" }}>Developer Portfolio</h4>
                        <p className="latestwork-desc mb-lg-5"> I am currently working on this website! 
                            This is project initiated during my internship at TELUS International Philippines, Inc.
                        </p>
                        <div className="col-lg-10 mb-4">
                            <button type="button" className="lw-btn btn btn-dark">HTML</button>
                            <button type="button" className="lw-btn btn btn-dark">SCSS</button>
                            <button type="button" className="lw-btn btn btn-dark">Bootstrap</button>
                            <button type="button" className="lw-btn btn btn-dark">React</button>
                            <button type="button" className="lw-btn btn btn-dark">EmailJS</button>
                            <button type="button" className="lw-btn btn btn-dark">GitHub</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 d-flex align-items-center">
                        <div className="terminal-window">
                            <div className="terminal-title">
                                <div className="terminal-title-btn">
                                    <span className="btn-closebtn">&#x02022;</span>
                                    <span className="btn-mini">&#x02022;</span>
                                    <span className="btn-max">&#x02022;</span>
                                </div>
                                <div></div>
                            </div>
                            <div className="terminal-console">
                                <img className="lw-img" src={Portfolio} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About