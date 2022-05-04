import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import Splash from '../../assets/img/projects/tempo/splashscreen.jpg';
import Calendar from '../../assets/img/projects/tempo/calendar.jpg';
import Notes from '../../assets/img/projects/tempo/notes.jpg';
import Checklist from '../../assets/img/projects/tempo/checklist.jpg';
import NewChecklist from '../../assets/img/projects/tempo/checklist-new.jpg';
import Pomodoro from '../../assets/img/projects/tempo/pomodoro.jpg';
import Settings from '../../assets/img/projects/tempo/settings.jpg';
import Color from '../../assets/img/projects/tempo/color.jpg';
import About from '../../assets/img/projects/tempo/about.jpg';
import Reminder from '../../assets/img/projects/tempo/reminder.jpg';

const Tempo = () => {

    const images = [
        {
            src: Splash,
            alt: "Splashscreen"
        },
        {
            src: Calendar,
            alt: "Calendar"
        },
        {
            src: Notes,
            alt: "Notes"
        },
        {
            src: Checklist,
            alt: "Checklist"
        },
        {
            src: NewChecklist,
            alt: "New Task"
        },
        {
            src: Pomodoro,
            alt: "Pomodoro"
        },
        {
            src: Settings,
            alt: "Settings"
        },
        {
            src: Color,
            alt: "Color"
        },
        {
            src: About,
            alt: "About"
        },
        {
            src: Reminder,
            alt: "Reminder"
        }
    ];

    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <div className="project row mx-5 my-3 py-5 px-4">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="fp-text fw-bold pb-2">Featured Project </h1>
                    <h3 className="fw-bold py-2" style={{ color: "#198754" }}>
                        Tempo
                    </h3>
                    <h5 className="fst-italic fw-light">Developer </h5>
                    <div className="fp-desc font-400">
                        <p>
                            A Task Management Application that can help a user be organize with his works. 
                            This app helps the user be reminded of the tasks that needs to be done.

                        </p>
                        <p className="fw-bold">Features:</p>
                        <ul>
                            <li>Calendar</li>
                            <li>Notes</li>
                            <li>Task Checklist</li>
                            <li>Pomodoro</li>
                            <li>Task Reminder</li>
                        </ul>
                        <p className="fw-bold">Tools and Technologies Used:</p>
                        <p>Java and Android Studio</p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex align-items-center justify-content-center">
                    <Carousel variant="dark" controls={false}>
                        {images.map((img, pos) => (
                            <Carousel.Item interval={2000} key={pos}>
                                <img
                                    className="tempo-img"
                                    src={img.src}
                                    alt={img.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Tempo