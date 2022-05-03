import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Axie from '../../assets/img/projects/axie-memory-game/home.png';
import Mechanics from '../../assets/img/projects/axie-memory-game/mechanics.png';
import MainGame from '../../assets/img/projects/axie-memory-game/main-game.png';
import MainGame1 from '../../assets/img/projects/axie-memory-game/main-game1.png';
import Win from '../../assets/img/projects/axie-memory-game/win.png';
import Lose from '../../assets/img/projects/axie-memory-game/lose.png';

import { Modal, CloseButton, Button, Carousel } from "react-bootstrap";

const details = [
    {
        src: Axie,
        alt: "Axie Matching Game Image",
        title: "Axie Matching Game",
        snippet: "A simple game made with React",
        desc: "The project is an activity for our elective class at UST. We are tasked to create a simple game using the components, props, and states of React." +
            "The game includes the features of a matching/memory game.",
    }
];

const images = [
    {
        src: Axie,
        alt: "Home Page"
    },
    {
        src: Mechanics,
        alt: "Mechanics Page"
    },
    {
        src: MainGame,
        alt: "Main Game Page"
    },
    {
        src: MainGame1,
        alt: "Main Game Page"
    },
    {
        src: Win,
        alt: "Win Modal"
    },
    {
        src: Lose,
        alt: "Lose Modal"
    }

];

const AxieGameCard = () => {

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
                                <p>Features:</p>
                                <ol>
                                    <li>Card Matching with a maximum of 15 moves</li>
                                    <li>Shuffle/Reset</li>
                                    <li>Play/Try Again</li>
                                </ol>
                                <p>Game Mechanics:</p>
                                <ol>
                                    <li>Start the game by selecting a card.</li>
                                    <li>Find its match by choosing another card.</li>
                                    <li>If the cards don’t match, the flipped cards will be flipped back.</li>
                                    <li>Every time a pair of cards is flipped, it counts as one move.</li>
                                    <li>In 15 movements, find all of the matches. The game will be over once you run out of
                                        moves.</li>
                                </ol>
                                <p className="fw-bold">Tools and Technologies Used:</p>
                                <p>HTML, SCSS, Bootstrap, React, and GitHub</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="justify-content-between">
                            <Button variant="success" className="modal-btn main-font">
                                <a className="text-white" href="https://axie-matching-game.herokuapp.com" target="__blank" style={{ textDecoration: "none" }}>
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

export default AxieGameCard