// Stylesheet
import '../styles/LatestWork.scss'

const About = () =>{

    return(
        <div className="latestwork-container container-fluid">
            <div className="inner-container shadow-lg">
                <div className="row p-5">
                    <h2>Latest Work </h2>
                </div>
                <div className="row mx-5">
                    <div className="col border">
                        <h4>Title</h4>
                        <p className="latestwork-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel eros blandit sem efficitur venenatis eu id urna.</p>
                    </div>
                    <div className="col border">
                        <div className="card">
                            image
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About