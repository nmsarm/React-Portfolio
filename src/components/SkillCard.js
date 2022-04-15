
// Card Component - Props
const SkillCard = (props) => {
    return (
        <>
            <div className="skills-card">
                <div className="skills-box">
                    <div className="skills-content">
                        <h2>{props.num}</h2>
                        <h3>{props.title}</h3>
                        <p className="font-400">{props.txt}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillCard