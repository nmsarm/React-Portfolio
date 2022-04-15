// Stylesheet
import '../styles/AboutSkills.css'
import SkillCard from '../components/SkillCard';

const AboutSkills = () =>{

    const SkillData = [
        {num: "01", title:"Web Design", txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"},
        {num: "02", title:"Front-End Development", txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"},
        {num: "03", title:"Project Management", txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?"}
    ];

    return(
        <div className="aboutSkills-container container-fluid">
            <div className="container">
                <div className="aboutSkills pa-heading-line-left row py-5">
                    <h1 className="me-auto"> What I Do </h1>
                    <div className="card-container mt-5">
                        {/* Map Data from SkillData Array */}
                        {SkillData.map((data) => (
                            <SkillCard
                                num= {data.num}
                                title={data.title}
                                txt={data.txt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSkills