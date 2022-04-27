import React from 'react'
// Stylesheet
import '../styles/OtherProjects.scss'

//Cards
import ElTomasinoCard from '../components/projects/ElTomasinoCard';

const OtherProjects = () => {

    return (
        <div className="otherProjs-container container-fluid mb-5">
            <div className="container">
                <div className="row py-5">
                    <h1 className="section-title text-center">Other Projects</h1>
                </div>
                <div className="row">
                    <div className="cards-container d-flex justify-content-center">
                        <ElTomasinoCard />
                        <ElTomasinoCard />
                        <ElTomasinoCard />
                        <ElTomasinoCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherProjects