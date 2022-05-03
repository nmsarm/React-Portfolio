import React from 'react'
import ElTomasino from '../components/projects/ElTomasino';
import ChoKoreanMart from '../components/projects/ChoKoreanMart';
import Sleepy from '../components/projects/Sleepy';
import Tempo from '../components/projects/Tempo';

// Stylesheet
import '../styles/Projects.scss'
import { Carousel } from "react-bootstrap";

const Projects = () => {
    return (
        <div className="projects-container container-fluid d-flex justify-content-center align-items-center px-5">
            <Carousel variant="dark" interval={null}>
                <Carousel.Item>
                    <ElTomasino />
                </Carousel.Item>
                <Carousel.Item>
                    <ChoKoreanMart />
                </Carousel.Item>
                <Carousel.Item>
                    <Sleepy />
                </Carousel.Item>
                <Carousel.Item>
                    <Tempo />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects
