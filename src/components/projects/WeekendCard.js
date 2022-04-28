import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Home from '../../assets/img/projects/weekend/home.png';
import HomeModal from '../../assets/img/projects/weekend/home-modal.png';
import Sat from '../../assets/img/projects/weekend/sat.png';
import Sat2 from '../../assets/img/projects/weekend/sat-2.png';
import Sat3 from '../../assets/img/projects/weekend/sat-3.png';
import Sat4 from '../../assets/img/projects/weekend/sat-4.png';
import Sun from '../../assets/img/projects/weekend/sun.png';
import Sun2 from '../../assets/img/projects/weekend/sun-2.png';

import { Modal, CloseButton, Button, Carousel } from "react-bootstrap";

const details = [
    {
        src: Home,
        alt: "Weekend Summary Activity Image",
        title: "Weekend Summary",
        snippet: "A simple website containing the activities done during the weekend",
        desc: "The purpose of the project is to create a website using the learnings from the ReactJS and CSS sessions during my internship at TELUS International Philippines, Inc." +
        " The website features the activities done during the weekend."
    }
];

const images = [
    {
        src: Home,
        alt: "Home Page"
    },
    {
        src: HomeModal,
        alt: "Home Modal"
    },
    {
        src: Sat,
        alt: "Sat Page"
    },
    {
        src: Sat2,
        alt: "Sat Page"
    },
    {
        src: Sat3,
        alt: "Sat Page"
    },
    {
        src: Sat4,
        alt: "Sat Page"
    },
    {
        src: Sun,
        alt: "Sun Page"
    },
    {
        src: Sun2,
        alt: "Sun Page"
    }
];

const WeekendCard = () => {

    const [xlShow, setXLShow] = useState(false);

    const handleShow = () => {
        setXLShow(true);
    }

    const handleClose = () => setXLShow(false);

    return (
        <>
            {details.map((data) => (
                <>
                    <ProjectCard
                        src={data.src}
                        alt={data.alt}
                        title={data.title}
                        snippet={data.snippet}
                        onClick={handleShow}
                    />

                    <Modal
                        size="xl"
                        show={xlShow}
                        onHide={handleClose}
                        centered
                    >
                        <Modal.Header className="bg-dark text-white">
                            <Modal.Title><h3 className="main-font">{data.title}</h3></Modal.Title>
                            <CloseButton variant="white" onClick={handleClose}/>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel fade variant="dark">
                                {images.map((img) => (
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={img.src}
                                            alt={img.alt}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <div className="project-details font-400">
                                <p className="fw-bold mt-3">Description: </p>
                                <p>{data.desc}</p>
                                
                                <p className="fw-bold">Tools and Technologies Used:</p>
                                <p>HTML, CSS, Bootstrap, React, and GitHub</p>
                                
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose} className="main-font">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ))}
        </>
    );
}

export default WeekendCard