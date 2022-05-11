import React, { useState, useEffect } from "react";
// Stylesheet
import '../styles/AboutSkills.scss'
import SkillCard from '../components/SkillCard';
import Html from '../assets/img/skills/html.png';
import Css from '../assets/img/skills/css.png';
import Js from '../assets/img/skills/js.png';
import Bootstrap from '../assets/img/skills/bootstrap.png';
import ReactImg from '../assets/img/skills/react.png';
import Sass from '../assets/img/skills/sass.png';
import Node from '../assets/img/skills/nodejs.png';
import Mongo from '../assets/img/skills/mongodb.png';
import Firebase from '../assets/img/skills/firebase.png';
import Python from '../assets/img/skills/python.png';
import Php from '../assets/img/skills/php.png';
import Java from '../assets/img/skills/java.png';
import AndroidStudio from '../assets/img/skills/androidstudio.png';
import Github from '../assets/img/skills/github.png';
import Vscode from '../assets/img/skills/vscode.png';

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
            src: Html, 
            alt: "html logo", 
            text: "HTML" 
        },
        { 
            src: Css, 
            alt: "css logo", 
            text: "CSS" 
        },
        { 
            src: Js, 
            alt: "html logo", 
            text: "JavaScript" 
        },
        { 
            src: ReactImg, 
            alt: "react logo", 
            text: "React" 
        },
        { 
            src: Bootstrap, 
            alt: "bootstrap logo", 
            text: "Bootstrap" 
        },
        { 
            src: Sass, 
            alt: "sass logo", 
            text: "SASS" 
        },
        { 
            src: Node, 
            alt: "nodejs logo", 
            text: "Node.js" 
        },
        { 
            src: Mongo, 
            alt: "mongodb logo", 
            text: "MongoDB" 
        },
        { 
            src: Firebase, 
            alt: "firebase logo", 
            text: "Firebase" 
        },
        { 
            src: Python, 
            alt: "python logo", 
            text: "Python" 
        },
        { 
            src: Php, 
            alt: "php logo", 
            text: "PHP" 
        },
        { 
            src: Java, 
            alt: "java logo", 
            text: "Java" 
        },
        { 
            src: AndroidStudio, 
            alt: "androidstudio logo", 
            text: "Android Studio" 
        },
        { 
            src: Github, 
            alt: "github logo", 
            text: "GitHub" 
        },
        { 
            src: Vscode, 
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
                    <h2>Tools and Technologies</h2>
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