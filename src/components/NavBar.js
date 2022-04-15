import React, { useState } from 'react'; 
import { Navbar, Nav } from "react-bootstrap";

// Stylesheet
import '../styles/NavBar.css'

const NavBar = () => {

    const [navbar, setNavbar ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    
    return (
        <>
        {/* remove for transparency: bg="dark" variant="light" */}
        <Navbar 
            collapseOnSelect 
            expand="lg" 
            className={navbar ? "shadow fixed-top navbar-light p-0" : "fixed-top navbar-dark"} 
            bg={ navbar ? "light" : " "}
            variant={ navbar ? "light" : " "}
        > 
            <div className="container">
                <Navbar.Brand href="/">
                   <b>DaneahSarmiento</b>
                </Navbar.Brand>
                <Navbar.Toggle className="my-2" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav navbar-nav">
                    <Nav className={navbar ? "navbar-nav ms-auto": "me-auto offset-lg-3"}>
                        <Nav.Link href="#home" className={navbar ? "nav-link" : "nav-link offset-md-1"}>
                            <p 
                                className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                            > 
                                Home 
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#about"className={navbar ? "nav-link" : "nav-link offset-md-2"}>
                            <p 
                                className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                            > 
                                About 
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#works" className={navbar ? "nav-link" : "nav-link offset-md-2"}>
                            <p 
                                className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                            > 
                                Works 
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#contact" className={navbar ? "nav-link" : "offset-lg-10 pt-3"}>
                            {navbar ? 
                                 <p 
                                 className={navbar ? "pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                                    > 
                                       Contact Me
                                    </p>
                                : 
                                <button className="btn-success rounded p-2 shadow" style={{width: "120px"}}> Contact Me </button>
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

