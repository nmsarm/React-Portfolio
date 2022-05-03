import React, { useState, useEffect } from "react";
// Stylesheet
import '../styles/AboutSkills.scss'
import SkillCard from '../components/SkillCard';
import html from '../assets/img/skills/html.png';
import css from '../assets/img/skills/css.png';
import js from '../assets/img/skills/js.png';
import bootstrap from '../assets/img/skills/bootstrap.png';
import react from '../assets/img/skills/react.png';
import sass from '../assets/img/skills/sass.png';
import node from '../assets/img/skills/nodejs.png';
import mongo from '../assets/img/skills/mongodb.png';
import firebase from '../assets/img/skills/firebase.png';
import python from '../assets/img/skills/python.png';
import php from '../assets/img/skills/php.png';
import java from '../assets/img/skills/java.png';
import androidstudio from '../assets/img/skills/androidstudio.png';
import github from '../assets/img/skills/github.png';
import vscode from '../assets/img/skills/vscode.png';

// Animate on Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutSkills = () => {

    const SkillData = [
        { 
            num: "01", 
            title: "Web Development", 
            txt: "I am knowledgeable in Front-end development and currently developing my skills towards Full Stack Development." 
        },
        { 
            num: "02", 
            title: "Mobile Development", 
            txt: "I have basic experience in developing simple mobile applications using Java and Android Studio." 
        },
        { 
            num: "03", 
            title: "UI Design", 
            txt: "I can design and create useful user interfaces with my strong attention to detail." 
        }
    ];

    const TechData = [
        { 
            src: html, 
            alt: "html logo", 
            text: "HTML" 
        },
        { 
            src: css, 
            alt: "css logo", 
            text: "CSS" 
        },
        { 
            src: js, 
            alt: "html logo", 
            text: "JavaScript" 
        },
        { 
            src: react, 
            alt: "react logo", 
            text: "React" 
        },
        { 
            src: bootstrap, 
            alt: "bootstrap logo", 
            text: "Bootstrap" 
        },
        { 
            src: sass, 
            alt: "sass logo", 
            text: "SASS" 
        },
        { 
            src: node, 
            alt: "nodejs logo", 
            text: "Node.js" 
        },
        { 
            src: mongo, 
            alt: "mongodb logo", 
            text: "MongoDB" 
        },
        { 
            src: firebase, 
            alt: "firebase logo", 
            text: "Firebase" 
        },
        { 
            src: python, 
            alt: "python logo", 
            text: "Python" 
        },
        { 
            src: php, 
            alt: "php logo", 
            text: "PHP" 
        },
        { 
            src: java, 
            alt: "java logo", 
            text: "Java" 
        },
        { 
            src: androidstudio, 
            alt: "androidstudio logo", 
            text: "Android Studio" 
        },
        { 
            src: github, 
            alt: "github logo", 
            text: "GitHub" 
        },
        { 
            src: vscode, 
            alt: "vscode logo", 
            text: "VSCode" 
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
    useEffect(() => {
        Aos.init({duration: 500});
    }, []);


    return (
        <div className="aboutSkills-container container-fluid">
            <div className="container">
                <div className={isMobile ? "aboutSkills row py-5" : "aboutSkills pa-heading-line-left row py-5"}>
                    <h1 className="me-auto"  data-aos="fade-right"> What I Do </h1>
                    <div className="card-container mt-5">
                        {/* Map Data from SkillData Array */}
                        {SkillData.map((data, pos) => (
                            <SkillCard
                                key={pos}
                                num={data.num}
                                title={data.title}
                                txt={data.txt}
                            />
                        ))}
                    </div>
                    <h2>Tools and Technologies Used</h2>
                    <div className="tech-container d-flex justify-content-center text-white mt-4 px-5">
                        {TechData.map((data, pos) => (
                            <div className="logo-container text-center p-4" data-aos="fade-up" key={pos}>
                                <img className="tech-logo pb-3" src={data.src} alt={data.alt}/>
                                <p className="font-400">{data.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSkills