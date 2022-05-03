import React from 'react'
// Stylesheet
import '../styles/Home.scss';
import { Button } from 'react-bootstrap';
import Img from '../assets/img/home-img.png';

import Typewriter from 'typewriter-effect';

const Home = () =>{

    return(
        <div className="home-container container-fluid d-flex align-items-center justify-content-center p-0">
            <div className="home-left">
                <div className="homeLeft-wrapper">
                    <h3 className="home-subtitle text-white">Hello!</h3>
                    <h1 className="home-title text-white">I’m <span className="name-text">Daneah Sarmiento</span></h1>
                    <h3 className="home-description text-white">
                             <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}

                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('An aspiring Web Developer')
                                        .pauseFor(2000)
                                        .start();

                                }}  
                            />
                    </h3>
                    <div className="mt-4 mb-5">
                        <a className="home-socmed-btn btn btn-outline-light btn-floating px-3" href="mailto:daneahsarmiento@gmail.com?"  target="__blank" role="button"
                            ><i className="fa fa-envelope"></i
                        ></a>
                        {/* <a className="btn btn-outline-light btn-floating px-3 mx-4" href="https://www.instagram.com/nmsarm/"  target="__blank" role="button"
                            ><i className="fa fa-instagram"></i
                        ></a> */}
                        <a className="home-socmed-btn btn btn-outline-light btn-floating px-3" href="https://www.linkedin.com/in/daneahsarmiento/"  target="__blank" role="button"
                            ><i className="fa fa-linkedin"></i
                        ></a> 
                        <a className="home-socmed-btn btn btn-outline-light btn-floating px-3" href="https://github.com/nmsarm"  target="__blank" role="button"
                            ><i className="fa fa-github"></i
                        ></a>
                    </div>

                    <Button 
                        variant="success"
                        className="btn-view rounded py-2"
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
        </div>
    );
}

export default Home