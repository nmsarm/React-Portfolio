import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import Eltomasino1 from '../../assets/img/projects/el-tomasino/el-tomasino1.png';
import Eltomasino2 from '../../assets/img/projects/el-tomasino/el-tomasino2.png';
import Eltomasino3 from '../../assets/img/projects/el-tomasino/el-tomasino3.png';
import Eltomasino4 from '../../assets/img/projects/el-tomasino/el-tomasino4.png';
import Eltomasino41 from '../../assets/img/projects/el-tomasino/el-tomasino4.1.png';
import Eltomasino5 from '../../assets/img/projects/el-tomasino/el-tomasino5.png';
import Eltomasino6 from '../../assets/img/projects/el-tomasino/el-tomasino6.png';
import Eltomasino7 from '../../assets/img/projects/el-tomasino/el-tomasino7.png';
import Eltomasino8 from '../../assets/img/projects/el-tomasino/el-tomasino8.png';
import Eltomasino9 from '../../assets/img/projects/el-tomasino/el-tomasino9.png';

const ElTomasino = () => {

    const images = [
        {
            src: Eltomasino1,
            alt: "Home"
        },
        {
            src: Eltomasino2,
            alt: "Athletes"
        },
        {
            src: Eltomasino3,
            alt: "Game Schedules"
        },
        {
            src: Eltomasino4,
            alt: "Tryouts"
        },
        {
            src: Eltomasino41,
            alt: "Tryouts Form"
        },
        {
            src: Eltomasino5,
            alt: "Tryouts Email"
        },
        {
            src: Eltomasino6,
            alt: "Login"
        },
        {
            src: Eltomasino7,
            alt: "Dashboard"
        },
        {
            src: Eltomasino8,
            alt: "Engagment Reports"
        },
        {
            src: Eltomasino9,
            alt: "About"
        }

    ];

    return (
        <>
            <div className="project row mx-5 my-3 py-5 px-4">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="fp-text fw-bold pb-2">Featured Project </h1>
                    <h3 className="fw-bold py-2" style={{ color: "#198754" }}>EL TOMASINO: A Web Application Dedicated in Promoting UST Athletes</h3>
                    <h5 className="fst-italic fw-light">Project Manager / Developer </h5>
                    <div className="fp-desc font-400">
                        <p>
                            A tailored content management platform created for the Institute of Physical Education and Athletics (IPEA)
                            of the University of Santo Tomas. The project aims to help in promoting the athletes of the University through an athletic-focused website.
                        </p>
                        <p className="fw-bold">Features:</p>
                        <ul>
                            <li>Webpages for Athletes, Teams, Alumni, Game Schedules, Latest News, Athlete Stories, About</li>
                            <li>Registration Forms for Tryouts</li>
                            <li>Login/Forgot Password</li>
                            <li>CRUD Functionalities for Accounts and Content Management</li>
                            <li>Engagement Reports, Audit Logs, Archive</li>
                        </ul>
                        <p className="fw-bold">Tools and Technologies Used:</p>
                        <p>HTML, CSS, Bootstrap, React, Firebase, Nodemailer, and GitHub</p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex align-items-center">
                    <Carousel fade variant="dark" controls={false}>
                        {images.map((img, pos) => (
                            <Carousel.Item interval={2000} key={pos}>
                                <img
                                    className="d-block w-100"
                                    src={img.src}
                                    alt={img.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Button variant="dark" className="viewSite-btn main-font mt-2">
                        <a className="text-white" href="https://el-tomasino.herokuapp.com/" target="__blank" style={{ textDecoration: "none" }}>
                            View Main Website
                        </a>
                    </Button>
                    <Button variant="dark" className="viewSite-btn main-font mt-2">
                        <a className="text-white" href="https://el-tomasino.herokuapp.com/admin" target="__blank" style={{ textDecoration: "none" }}>
                            View Admin Site
                        </a>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ElTomasino