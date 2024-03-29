import React, { useState, useEffect } from "react";
import TimelineCard from '../components/TimelineCard';
import Telus from '../assets/img/telus-logo.png';
import UST from '../assets/img/ust-logo.png';
import Fireclay from '../assets/img/fireclay-logo.png';
import IAc from '../assets/img/iacademy-logo.png';

// Stylesheet
import '../styles/AboutMe.scss'

// Animate on Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
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
        Aos.init({ duration: 500 });
    }, []);

    const TimelineData = [
        {
            date: "February 2022 - May 2022",
            src: Telus,
            width: "60",
            height: "40",
            heading: "TELUS International Philippines, Inc.",
            subtitle: "Application Development and Support Intern",
            txt: '• Trained to be a Full-Stack Developer\n' +
                '• Learned and developed websites using HTML, CSS, Bootstrap, JavaScript, React, Node/Express JS, and MongoDB\n' +
                '• Attended Java Core, SQL, Unix, Python, Git, and QA Processes and Tools trainings\n' +
                '• Studied the basics of Project Management, DevOps, Agile Development, ITIL, Data Science, Cloud Computing Fundamentals, and AWS\n' +
                '• Experienced working as a Team Lead/Scrum Master'
        },
        {
            date: "August 2018 - Present",
            src: UST,
            width: "50",
            height: "50",
            heading: "University of Santo Tomas",
            subtitle: "Bachelor of Science in Information Technology - Major in Web and Mobile App Development",
            txt: "Dean's Lister:\n" +
                '• 4th Year - 1st Semester, A.Y 2021-2022\n' +
                '• 3rd Year - 1st Semester, 2nd Semester, A.Y 2020 - 2021\n' +
                '• 2nd Year - 1st Semester, 2nd Semester, A.Y 2019 - 2020\n' +
                '• 1st year - 1st Semester, A.Y 2018 - 2019'
        },
        {
            date: "April 2018",
            src: Fireclay,
            width: "50",
            height: "50",
            heading: "Fireclay Corporation",
            subtitle: "Software Developer Intern - SHS Work Immersion",
            txt: "• Worked for 80 hours as a Software Developer Intern in Fireclay Corporation\n" +
                '• Researched on White Box vs Black Box Testing\n' +
                "• Tested the company's Asset Management System using Black Box testing\n" +
                '• Accomplished Test Cases\n' +
                '• Used Jira for bug reports and project tracking\n' +
                '• Explored Vaadin for Java Web Application Development \n' +
                '• Learned and implemented Firebase Database/Cloud Storage through Android Studio'
        },
        {
            date: "August 2016 - May 2018",
            src: IAc,
            width: "50",
            height: "50",
            heading: "iACADEMY",
            subtitle: "Senior High School - Software Development - Technical Vocational Track",
            txt: "Grade 12 - With High Honors"
        }
    ]

    return (
        <div className="aboutMe-container container-fluid">
            <div className="container">
                <div className={isMobile ? "aboutMe row py-5" : "aboutMe pa-heading-line-right row py-5"}>
                    <h1 data-aos="fade-left"> Who Am I </h1>
                    <p className="aboutMe-p text-white" data-aos="fade-left">
                        I am <b> Daneah Marelle M. Sarmiento</b>, an Information Technology graduate at the University of Santo Tomas, specializing in Web and Mobile App Development.
                        I am a detail-oriented and a keen observant individual, eager to learn about emerging technologies
                        and acquire new skills and opportunities. I am interested towards learning and working with Web/Mobile App Design and Development,
                        as well as in the field of Software Quality Assurance.
                    </p>
                    <div className="experience mt-5">
                        <div className="row text-white">
                            <div className="col-12 col-lg-4 col-md-12">
                                <h2> Experience Timeline </h2>
                            </div>
                            <div className="timeline-content col-12 col-lg-8 col-md-12">
                                <div className="timeline">
                                    <ul>
                                        {TimelineData.map((data, pos) => (
                                            <TimelineCard
                                                key={pos}
                                                src={data.src}
                                                date={data.date}
                                                imgWidth={data.width}
                                                imgHeight={data.height}
                                                heading={data.heading}
                                                subtitle={data.subtitle}
                                                text={data.txt}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe