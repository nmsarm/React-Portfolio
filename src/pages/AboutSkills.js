import React from 'react'
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
import { useEffect } from 'react';

const AboutSkills = () => {

    const SkillData = [
        { 
            num: "01", 
            title: "Web Development", 
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?" 
        },
        { 
            num: "02", 
            title: "Mobile Development", 
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?" 
        },
        { 
            num: "03", 
            title: "UI/UX Design", 
            txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?" 
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

    useEffect(() => {
        Aos.init({duration: 500});
    }, []);


    return (
        <div className="aboutSkills-container container-fluid">
            <div className="container">
                <div className="aboutSkills pa-heading-line-left row py-5 m-0">
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