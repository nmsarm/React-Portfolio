import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Stylesheet
import '../styles/Contact.scss'
import { Modal, Button, CloseButton, Form } from 'react-bootstrap';
import CV from '../assets/files/sarmiento-daneah-cv.pdf';

const Contact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xvvmg9q', 'portfolio-contact', form.current, 'Fg9Qpt_ee8CGX86Gd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        handleShow();
        form.current.reset();
    };

    return (
        <>
            <div className="c-bg"></div>
            <div className="contact-container container-fluid d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col px-5">
                            <h1 className="contact-title text-white">Get in Touch</h1>
                            <p className="contact-desc text-white font-400 mt-4">
                                Feel free to reach out for inquiries, invitations, or collaborations! :)
                            </p>
                            <div className="mt-5 mb-4">
                                <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="mailto:daneahsarmiento@gmail.com?" target="__blank" role="button"
                                ><i className="fa fa-envelope"></i
                                ></a>
                                <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="https://www.linkedin.com/in/daneahsarmiento/" target="__blank" role="button"
                                ><i className="fa fa-linkedin"></i
                                ></a>
                                <a className="socmed-btn btn btn-outline-light btn-floating px-3" href="https://github.com/nmsarm" target="__blank" role="button"
                                ><i className="fa fa-github"></i
                                ></a>
                            </div>
                            <Button
                                variant="success"
                                className="btn-download rounded py-2 font-400"
                                href={CV}
                                download="Sarmiento-DaneahMarelle-CV.pdf"
                                target="_blank"
                            >
                                Download CV
                            </Button>{' '}

                        </div>
                        <div className="col">
                            <Form className="font-400" ref={form} onSubmit={sendEmail} >
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label className="text-white">Name</Form.Label>
                                    <Form.Control type="text" name="name" autoComplete="off" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="text-white">Email address</Form.Label>
                                    <Form.Control type="email" name="email" autoComplete="off" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formSubject">
                                    <Form.Label className="text-white">Subject</Form.Label>
                                    <Form.Control type="text" name="subject" autoComplete="off" required/>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="text-white">Leave me a message!</Form.Label>
                                    <Form.Control as="textarea" rows={5} name="message" autoComplete="off" required/>
                                </Form.Group>

                                <Button className="btn-submit btn-success px-4 py-2" variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-dark text-white">
                    <Modal.Title className="main-font">Email Sent!</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose}/>
                </Modal.Header>
                <Modal.Body>Thank you for contacting me. I'll send you an email as soon as possible. Have a good day!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Contact