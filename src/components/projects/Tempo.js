import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import splash from '../../assets/img/projects/tempo/splashscreen.jpg';
import calendar from '../../assets/img/projects/tempo/calendar.jpg';
import notes from '../../assets/img/projects/tempo/notes.jpg';
import checklist from '../../assets/img/projects/tempo/checklist.jpg';
import newChecklist from '../../assets/img/projects/tempo/checklist-new.jpg';
import pomodoro from '../../assets/img/projects/tempo/pomodoro.jpg';
import settings from '../../assets/img/projects/tempo/settings.jpg';
import color from '../../assets/img/projects/tempo/color.jpg';
import about from '../../assets/img/projects/tempo/about.jpg';
import reminder from '../../assets/img/projects/tempo/reminder.jpg';

const Tempo = () => {

    const images = [
        {
            src: splash,
            alt: "Splashscreen"
        },
        {
            src: calendar,
            alt: "Calendar"
        },
        {
            src: notes,
            alt: "Notes"
        },
        {
            src: checklist,
            alt: "Checklist"
        },
        {
            src: newChecklist,
            alt: "New Task"
        },
        {
            src: pomodoro,
            alt: "Pomodoro"
        },
        {
            src: settings,
            alt: "Settings"
        },
        {
            src: color,
            alt: "Color"
        },
        {
            src: about,
            alt: "About"
        },
        {
            src: reminder,
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