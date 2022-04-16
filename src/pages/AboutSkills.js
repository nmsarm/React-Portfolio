// Stylesheet
import '../styles/AboutSkills.scss'
import SkillCard from '../components/SkillCard';
import html from '../assets/img/skills/html.svg';
import css from '../assets/img/skills/css.svg';
import js from '../assets/img/skills/js.svg';
import bootstrap from '../assets/img/skills/bootstrap.svg';
import react from '../assets/img/skills/react.svg';
import sass from '../assets/img/skills/sass.svg';

const AboutSkills = () =>{

    const SkillData = [
        {key: 1, num: "01", title:"Web Design", txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"},
        {key: 2, num: "02", title:"Front-End Development", txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"},
        {key: 3,num: "03", title:"Project Management", txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"}
    ];

    return(
        <div className="aboutSkills-container container-fluid">
            <div className="container">
                <div className="aboutSkills container pa-heading-line-left row py-5 m-0">
                    <h1 className="me-auto"> What I Do </h1>
                    <div className="card-container mt-5">
                        {/* Map Data from SkillData Array */}
                        {SkillData.map((data) => (
                            <SkillCard
                                key={data.key}
                                num={data.num}
                                title={data.title}
                                txt={data.txt}
                            />
                        ))}
                    </div>
                    <h2>Tools and Technologies</h2>
                    {/* <div className="container d-flex flex-row justify-content-center text-white mt-4">
                        <div className="logo-container text-center p-4">
                            <img className="tech-logo pb-2" src={html} alt="html logo" />
                            <p>HTML</p>
                        </div>
                        <div className="logo-container text-center p-4">
                            <img className="tech-logo pb-2" src={css} alt="css logo" />
                            <p>CSS</p>
                        </div>
                        <div className="logo-container text-center text-center p-4">
                            <img className="tech-logo pb-2" src={bootstrap} alt="bootstrap logo" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="logo-container text-center text-center p-4">
                            <img className="tech-logo pb-2" src={js} alt="js logo" />
                            <p>JavaScript</p>
                        </div>
                    </div> */}
                    <div className="container text-white my-5">
                        <div className="row mb-2">
                            <div className="col-lg-3 col-12 mb-5">
                                <figure className="chart" data-percent="75">
                                    <figcaption>HTML</figcaption>
                                    <img className="html" src={html} />
                                    <svg width="200" height="200">
                                    <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                                    </svg>
                                </figure>
                                <h5 className="text-white text-center mt-5">HTML</h5>
                            </div>
                            <div className="col-lg-3 col-12 mb-5">
                                <figure className="chart" data-percent="75">
                                    <figcaption>CSS</figcaption>
                                    <img className="css" src={css} alt="css logo" width="100" height="100"/>
                                    <svg width="200" height="200">
                                        <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                                    </svg>
                                </figure>
                                <h5 className="text-white text-center mt-5">CSS</h5>
                            </div>
                            <div className="col-lg-3 col-12 mb-5">
                                <figure className="chart" data-percent="50">
                                    <figcaption>JavaScript</figcaption>
                                    <img className="javascript" src={js} alt="bootstrap logo" width="100" height="100"/>
                                    <svg width="200" height="200">
                                        <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                                    </svg>
                                </figure>
                                <h5 className="text-white text-center mt-5">JavaScript</h5>
                            </div>
                            <div className="col-lg-3 col-12 mb-5">
                                <figure className="chart" data-percent="50">
                                    <figcaption>React</figcaption>
                                    <img className="react" src={react} alt="react logo" width="100" height="100"/>
                                    <svg width="200" height="200">
                                        <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                                    </svg>
                                </figure>
                                <h5 className="text-white text-center mt-5">ReactJS</h5>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3 col-12">
                                <figure className="chart" data-percent="75">
                                    <figcaption>Bootstrap</figcaption>
                                    <img className="bootstrap" src={bootstrap} alt="bootstrap logo" width="100" height="100"/>
                                    <svg width="200" height="200">
                                        <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                                    </svg>
                                </figure>
                                <h5 className="text-white text-center mt-5">Bootstrap</h5>
                            </div>
                            <div className="col-lg-3 col-12">
                                <figure className="chart" data-percent="25">
                                    <figcaption>Sass</figcaption>
                                    <img className="sass" src={sass} alt="sass logo" width="100" height="100"/>
                                    <svg width="200" height="200">
                                        <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
                                    </svg>
                                </figure>
                                <h5 className="text-white text-center mt-5">SASS</h5>
                            </div>
                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSkills