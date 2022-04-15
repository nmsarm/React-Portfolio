// Stylesheet
import '../styles/AboutSkills.css'

const AboutSkills = () =>{

    return(
        <div className="aboutSkills-container container-fluid">
            <div className="container">
                <div className="aboutSkills pa-heading-line-left row py-5">
                    <h1 className="me-auto"> What I Do </h1>
                    <div className="card-container mt-5">
                        <div className="skills-card">
                            <div className="skills-box">
                            <div className="skills-content">
                                <h2>01</h2>
                                <h3>Web Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            </div>
                            </div>
                        </div>
                        <div class="skills-card">
                            <div class="skills-box">
                            <div class="skills-content">
                                <h2>02</h2>
                                <h3>Front-End Development</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                               
                            </div>
                            </div>
                        </div>

                        <div class="skills-card">
                            <div class="skills-box">
                            <div class="skills-content">
                                <h2>03</h2>
                                <h3>Project Management</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSkills