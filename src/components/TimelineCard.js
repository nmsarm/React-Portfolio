// Card Component - Props
const TimelineCard = (props) => {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);

    return (
        <>
             <li>
                <div class="timeline-content">
                    <h5 class="date">{props.date}</h5>
                    <div class="box"></div>
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