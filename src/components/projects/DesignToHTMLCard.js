import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import DesignToHTML from '../../assets/img/projects/design-to-html/home.png';
import About from '../../assets/img/projects/design-to-html/about-us.png';
import Services from '../../assets/img/projects/design-to-html/services.png';
import Contact from '../../assets/img/projects/design-to-html/contact.png';

import { Modal, CloseButton, Button, Carousel } from "react-bootstrap";

const details = [
    {
        src: DesignToHTML,
        alt: "DesignToHTML Image",
        title: "Design To HTML",
        snippet: "A static and responsive website, replicating a Figma layout",
        desc: "The project's objective is to replicate a Figma layout by making a static and responsive website." +
            "This is a project done during my internship at TELUS International Philippines, Inc."
    }
];

const images = [
    {
        src: DesignToHTML,
        alt: "Home Section"
    },
    {
        src: About,
        alt: "About Us Section"
    },
    {
        src: Services,
        alt: "Services Section"
    },
    {
        src: Contact,
        alt: "Contact Section"
    }
];

const DesignToHTMLCard = () => {

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
                            <CloseButton variant="white" onClick={handleClose} />
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
                                <p>HTML, CSS, Bootstrap, Figma, and GitHub</p>

                            </div>
                        </Modal.Body>
                        <Modal.Footer className="justify-content-between">
                            <Button variant="success" className="modal-btn main-font">
                                <a className="text-white" href="https://designtohtml-agency-site.herokuapp.com" target="__blank" style={{ textDecoration: "none" }}>
                                    Demo
                                </a>
                            </Button>
                            <Button variant="dark" onClick={handleClose} className="modal-btn main-font">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ))}
        </>
    );
}

export default DesignToHTMLCard