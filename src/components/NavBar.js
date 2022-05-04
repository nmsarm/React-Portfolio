import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from "react-bootstrap";

import Aos from 'aos';
import 'aos/dist/aos.css';

// Stylesheet
import '../styles/NavBar.scss'

const NavBar = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    const [isMobile, setIsMobile] = useState(false);

    const [isTablet, setIsTablet] = useState(false);


    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 995) {
            setIsMobile(true)
        } else if (window.innerWidth < 1400) {
            setIsTablet(true)
        } else {
            setIsMobile(false)
            setIsTablet(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);


    return (
        <>
            {/* remove for transparency: bg="dark" variant="light" */}
            <Navbar
                collapseOnSelect
                expand="lg"
                className={navbar ? "shadow fixed-top navbar-light p-0" : "fixed-top navbar-dark p-0"}
                bg={navbar ? "light" : isMobile ? "dark" : isTablet ? "dark" : " "}
                variant={navbar ? "light" : " "}
                data-aos={navbar ? " " : "fade-down"}
            >
                <div className="container">
                    <Navbar.Brand href="/">
                        <b>DaneahSarmiento</b>
                    </Navbar.Brand>
                    <Navbar.Toggle className="my-2" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav navbar-nav">
                        <Nav className={navbar ? "navbar-nav ms-auto" : isMobile ? "ms-auto": isTablet ? "ms-auto" : "me-auto offset-lg-3"}>
                            <Nav.Link
                                href="#home"
                                className={ navbar ? "nav-link" : isMobile ? " " : "nav-link offset-md-1"
                                    }>
                                <p
                                    className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                >
                                    Home
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#about" className={navbar ? "nav-link" : isMobile ? " " : isTablet? " " : "nav-link offset-md-2"}>
                                <p
                                    className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                >
                                    About
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#works" className={navbar ? "nav-link" : isMobile ? " " : isTablet? " " : "nav-link offset-md-2"}>
                                <p
                                    className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                >
                                    Projects
                                </p>
                            </Nav.Link>
                            <Nav.Link href="#contact" className={navbar ? "nav-link" : isTablet ? " " : "nav-link offset-lg-11 pt-3"}>
                                {navbar ?
                                    <p
                                        className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                    >
                                        Contact
                                    </p>
                                    :
                                    isMobile ?

                                        <p
                                            className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                        >
                                            Contact
                                        </p>
                                        :
                                        isTablet ?
                                            <p
                                                className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                            >
                                                Contact
                                            </p>
                                            :
                                            <button className="contactBtn btn-success rounded p-2 shadow-lg"> Contact Me </button>

                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}

export default NavBar

