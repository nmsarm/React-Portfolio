import React from 'react'
// Stylesheet
import '../styles/OtherProjects.scss'

//Cards
import DesignToHTMLCard from '../components/projects/DesignToHTMLCard';
import AxieGameCard from '../components/projects/AxieGameCard';
import WeekendCard from '../components/projects/WeekendCard';
import BlogsCard from '../components/projects/BlogsCard';

const OtherProjects = () => {

    return (
        <div className="otherProjs-container container-fluid mb-5">
            <div className="container">
                <div className="row py-5">
                    <h1 className="section-title text-center">Other <span className="projects-title2"> Projects </span></h1>
                </div>
                <div className="row">
                    <div className="cards-container d-flex justify-content-center">
                        <DesignToHTMLCard />
                        <AxieGameCard />
                        <BlogsCard />
                        <WeekendCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherProjects