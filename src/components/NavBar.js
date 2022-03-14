import { Navbar, Nav } from "react-bootstrap";

// Stylesheet
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <>
        {/* remove for transparency: bg="dark" variant="light" */}
        <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-dark"> 
            <div className="container">
                <Navbar.Brand href="/">
                   LOGO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav navbar-nav">
                    <Nav className="me-auto offset-lg-3">
                        <Nav.Link href="#home" className="offset-lg-2">
                            <p className="text-white pt-3 hover-underline-animation"> Home </p>
                        </Nav.Link>
                        <Nav.Link href="#about" className="nav-link offset-lg-2">
                            <p className="text-white pt-3 hover-underline-animation"> About </p>
                        </Nav.Link>
                        <Nav.Link href="#works" className="nav-link offset-lg-2">
                            <p className="text-white pt-3 hover-underline-animation"> Works </p>
                        </Nav.Link>
                        <Nav.Link href="#contact" className="offset-lg-10 pt-3">
                            <button className="btn-success rounded p-2 shadow-sm" style={{width: "120px"}}> Contact Me </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        </>
    )
}

export default NavBar