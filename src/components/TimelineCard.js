// Animate on Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Card Component - Props
const TimelineCard = (props) => {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);

    useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return (
        <>
             <li data-aos="fade-left">
                <div className="timeline-content">
                    <h5 className="date">{props.date}</h5>
                    <div className="box"></div>
                    <div className="row mb-2">
                        <div className="col-1">
                            <img 
                                src={props.src} 
                                width={props.imgWidth} 
                                height={props.imgHeight}
                                alt={props.alt}
                            />
                        </div>
                        <div className="col-11 my-2">
                            <h3>{props.heading}</h3>
                        </div>
                    </div>
                    <h5><i>{props.subtitle}</i></h5>
                    <p className="timeline-text"> {newText} </p>
                </div>
            
            </li>
        </>
    );
}

export default TimelineCard