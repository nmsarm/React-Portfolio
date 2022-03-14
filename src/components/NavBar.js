import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
        {/* comment out for transparency: bg="dark" variant="dark" */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top"> 
            <div className="container border">
                <Navbar.Brand href="/">
                   LOGO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto offset-lg-3">
                        <Nav.Link href="#home" className="offset-lg-2">
                            <p className="pt-3"> Home </p>
                        </Nav.Link>
                        <Nav.Link href="#about" className="offset-lg-2">
                            <p className="pt-3"> About </p>
                        </Nav.Link>
                        <Nav.Link href="#works" className="offset-lg-2">
                            <p className="pt-3"> Works </p>
                        </Nav.Link>
                        <Nav.Link href="#contact" className="offset-lg-10 pt-3">
                            <button className="btn-primary rounded p-2 shadow-sm" style={{width: "120px"}}> Contact Me </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        </>
    )
}

export default NavBar