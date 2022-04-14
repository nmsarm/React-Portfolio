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
            collapseOnSelect expand="lg" 
            className={navbar ? "fixed-top navbar-light" : "fixed-top navbar-dark"} 
            bg={ navbar ? "light" : " "}
            variant={ navbar ? "light" : " "}
        > 
            <div className="container">
                <Navbar.Brand href="/">
                   <b>DaneahSarmiento</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav navbar-nav">
                    <Nav className="me-auto offset-lg-3">
                        <Nav.Link href="#home" className="offset-md-1">
                            <p 
                                className={navbar ? "text-dark pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                            > 
                                Home 
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#about" className="nav-link offset-md-2">
                            <p 
                                className={navbar ? "text-dark pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                            > 
                                About 
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#works" className="nav-link offset-md-2">
                            <p 
                                className={navbar ? "text-dark pt-3 hover-underline-animation2" : "text-white pt-3 hover-underline-animation"}
                            > 
                                Works 
                            </p>
                        </Nav.Link>
                        <Nav.Link href="#contact" className="offset-lg-10 pt-3">
                            <button className="btn-success rounded p-2 shadow" style={{width: "120px"}}> Contact Me </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        </>
    )
}

export default NavBar

