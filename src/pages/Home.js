// Stylesheet
import '../styles/Home.css';
import { Button } from 'react-bootstrap';
import Img from '../assets/img/home-img.png';

const Home = () =>{

    return(
        <div className="home-container container-fluid d-flex align-items-center justify-content-center p-0">
            <div className="home-left">
                <div className="homeLeft-wrapper">
                    <h3 className="home-subtitle text-white">Hello!</h3>
                    <h1 className="home-title text-white">I’m <span className="name-text">Daneah Sarmiento</span></h1>
                    <h2 className="home-description text-white">A Web Developer</h2>
                    <div className="mt-4 mb-5">
                        <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="mailto:daneahsarmiento@gmail.com?"  target="__blank" role="button"
                            ><i className="fa fa-envelope"></i
                        ></a>
                        {/* <a className="btn btn-outline-light btn-floating px-3 mx-4" href="https://www.instagram.com/nmsarm/"  target="__blank" role="button"
                            ><i className="fa fa-instagram"></i
                        ></a> */}
                        <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="https://www.linkedin.com/in/daneahsarmiento/"  target="__blank" role="button"
                            ><i className="fa fa-linkedin"></i
                        ></a> 
                        <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="https://github.com/nmsarm"  target="__blank" role="button"
                            ><i className="fa fa-github"></i
                        ></a>
                    </div>

                    <Button 
                        variant="success"
                        className="btn-view rounded px-4 py-2"
                        href="#works"
                    > 
                        View My Works 
                    </Button>

                    </div>
            </div>
            <div className="home-right">
                <div className="home-bg"></div>
                <img className="home-img pt-5" src={Img} alt="Img"/>
            </div>
            {/* <div className="intro-container container">
                <div className="row">
                    <div className="home-col1 col">
                        <h3 className="home-subtitle text-white">Hello!</h3>
                        <h1 className="home-title text-white">I’m <span className="text-success">Daneah Sarmiento</span></h1>
                        <p className="home-description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel eros blandit sem efficitur venenatis eu id urna.</p>

                        <div className="mb-4">
                            <a className="btn btn-outline-light btn-floating px-3 mx-1" href="#!" role="button"
                                ><i className="fa fa-facebook-f"></i
                            ></a>
                            <a className="btn btn-outline-light btn-floating px-3 mx-4" href="#!" role="button"
                                ><i className="fa fa-instagram"></i
                            ></a>
                            <a className="btn btn-outline-light btn-floating px-3 mx-1" href="#!" role="button"
                                ><i className="fa fa-linkedin"></i
                            ></a> 
                            <a className="btn btn-outline-light btn-floating px-3 mx-4" href="#!" role="button"
                                ><i className="fa fa-github"></i
                            ></a>
                        </div>

                        <button className="btn-success rounded px-4 py-2"> View My Works </button>

                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <img className="home-img pt-5" src={Img} alt="Img"/>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home