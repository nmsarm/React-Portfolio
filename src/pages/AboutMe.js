import TimelineCard from '../components/TimelineCard';
import telus from '../assets/img/telus-logo.png';
import UST from '../assets/img/ust-logo.png';
import fireclay from '../assets/img/fireclay-logo.png';
import iAc from '../assets/img/iacademy-logo.png';

// Stylesheet
import '../styles/AboutMe.css'

const AboutMe = () =>{
    
    return(
        <div className="aboutMe-container container-fluid">
            <div className="container">
                <div className="aboutMe pa-heading-line-right row py-5">
                    <h1> Who Am I </h1>
                    <p className="text-white">
                        Hello! I am <b> Daneah Marelle M. Sarmiento</b>, a 22-year old, 4th year Information Technology student at the University of Santo Tomas, specializing in Web and Mobile App Development. 
                        I am a detail-oriented and a keen observant individual, eager to learn about emerging technologies 
                        and acquire new skills and opportunities. I am interested towards learning and working with Web/Mobile App Design and Development, 
                        as well as in the field of Software Quality Assurance.
                    </p>
                    <div className="experience mt-5">
                        <div className="row text-white">
                            <div className="col-12 col-lg-4 col-md-12">
                                <h2> Experience and Education </h2>
                            </div>
                            <div className="timeline-content col-12 col-lg-8 col-md-12">
                                <div class="timeline">
                                    <ul>
                                        <TimelineCard 
                                            date="February 2022 - Present"
                                            src={telus}
                                            imgWidth="60"
                                            imgHeight="40"
                                            heading="TELUS International Philippines, Inc."
                                            subtitle="Application Development and Support Intern"
                                            text={'• Currently learning Full-Stack Development\n' +
                                            '• Learned and developed websites using HTML, CSS, Bootstrap, JavaScript, React, Node/Express JS, and MongoDB\n' +
                                            '• Attended Java Core, SQL, Python Basics, Git, and QA Processes and Tools trainings\n' +
                                            '• Studied the basics of Project Management, DevOps, Agile Development, ITIL, Data Science, Cloud Computing Fundamentals, and AWS\n' +
                                            '• Experienced working as a Team Lead/Scrum Master; Facilitated team scrum meetings'}  
                                        />
                                        <TimelineCard 
                                            date="August 2018 - Present"
                                            src={UST}
                                            imgWidth="50"
                                            imgHeight="50"
                                            heading="University of Santo Tomas"
                                            subtitle="Bachelor of Science in Information Technology - Major in Web and Mobile App Development"
                                            text={"Dean's Lister:\n" +
                                            '• 4th Year - 1st Semester, A.Y 2021-2022\n' +
                                            '• 3rd Year - 1st Semester, 2nd Semester, A.Y 2020 - 2021\n' +
                                            '• 2nd Year - 1st Semester, 2nd Semester, A.Y 2019 - 2020\n' +
                                            '• 1st year - 1st Semester, A.Y 2018 - 2019'}  
                                        />
                                         <TimelineCard 
                                            date="April 2018"
                                            src={fireclay}
                                            imgWidth="50"
                                            imgHeight="50"
                                            heading="Fireclay Corporation"
                                            subtitle="Software Developer Intern - SHS Work Immersion"
                                            text={"• Worked for 80 hours as a Software Developer Intern in Fireclay Corporation\n" +
                                            '• Researched on White Box vs Black Box Testing\n' +
                                            "• Tested the company's Asset Management System using Black Box testing\n" +
                                            '• Accomplished Test Cases\n' +
                                            '• Used Jira for bug reports and project tracking\n' +
                                            '• Explored Vaadin for Java Web Application Development \n' +
                                            '• Learned and implemented Firebase Database/Cloud Storage through Android Studio' } 
                                        />
                                        <TimelineCard 
                                            date="August 2016 - May 2018"
                                            src={iAc}
                                            imgWidth="50"
                                            imgHeight="50"
                                            heading="iACADEMY"
                                            subtitle="Senior High School - Software Development - Technical Vocational Track"
                                            text="Grade 12 Graduation Award - With High Honors"
                                        />

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