// Animate on Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Card Component - Props
const SkillCard = (props) => {
    
    useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return (
        <>
            <div className="skills-card"  data-aos="flip-left">
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