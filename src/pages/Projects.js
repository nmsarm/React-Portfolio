import React from 'react'
import ElTomasino from '../components/projects/ElTomasino';
import ChoKoreanMart from '../components/projects/ChoKoreanMart';
// Stylesheet
import '../styles/Projects.scss'
import { Carousel } from "react-bootstrap";

const Projects = () => {

    return (
        <div className="projects-container container-fluid d-flex justify-content-center align-items-center px-5">
            <Carousel variant="dark" interval={8000}>
                <Carousel.Item>
                    <ElTomasino />
                </Carousel.Item>
                <Carousel.Item>
                    <ChoKoreanMart />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects
