// Stylesheet
import '../styles/Contact.css'
import { Button, Form} from 'react-bootstrap';
import CV from '../assets/files/sarmiento-daneah-cv.pdf';

const Contact = () =>{

    return(
        <div className="contact-container container-fluid d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col px-5">
                        <h1 className="contact-title text-white">Get in Touch</h1>
                        <p className="contact-desc text-white font-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel eros blandit sem efficitur venenatis eu id urna.
                        </p>
                        <div className="mt-4 mb-5">
                            <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="mailto:daneahsarmiento@gmail.com?"  target="__blank" role="button"
                                ><i className="fa fa-envelope"></i
                            ></a>
                            <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="https://www.linkedin.com/in/daneahsarmiento/"  target="__blank" role="button"
                                ><i className="fa fa-linkedin"></i
                            ></a> 
                            <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="https://github.com/nmsarm"  target="__blank" role="button"
                                ><i className="fa fa-github"></i
                            ></a>
                        </div>
                        <Button 
                            variant="success" 
                            className="btn-download rounded px-4 py-2 font-400"
                            href={CV}
                            download="Sarmiento-DaneahMarelle-CV.pdf"
                            target="_blank"
                        >
                         Download CV 
                        </Button>{' '}

                    </div>
                    <div className="col">
                    <Form className="font-400">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label className="text-white">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="text-white">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSubject">
                            <Form.Label className="text-white">Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter subject" />
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-white">Leave me a message!</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter message"/>
                        </Form.Group>

                        <Button className="btn-success px-4 py-2" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact