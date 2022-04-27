import React from 'react'
// Stylesheet
import '../styles/OtherWorks.scss'

//Cards
import ElTomasinoCard from '../components/projects/ElTomasinoCard';

const OtherWorks = () => {

    return (
        <div className="otherWorks-container container-fluid mb-5">
            <div className="container">
                <div className="row py-5">
                    <h1 className="section-title text-center">Other Works</h1>
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

export default OtherWorks