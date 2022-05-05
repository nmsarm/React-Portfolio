import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import Home from '../../assets/img/projects/sleepy/home.png';
import Products from '../../assets/img/projects/sleepy/products.png';
import Product from '../../assets/img/projects/sleepy/product.png';
import About1 from '../../assets/img/projects/sleepy/about-1.png';
import About2 from '../../assets/img/projects/sleepy/about-2.png';
import About3 from '../../assets/img/projects/sleepy/about-3.png';
import Contact from '../../assets/img/projects/sleepy/contact.png';
import Admin from '../../assets/img/projects/sleepy/admin.png';
import Inquiries from '../../assets/img/projects/sleepy/inquiries.png';
import Profile from '../../assets/img/projects/sleepy/profile.png';

const Sleepy = () => {

    const images = [
        {
            src: Home,
            alt: "Home"
        },
        {
            src: Products,
            alt: "Products"
        },
        {
            src: Product,
            alt: "Product"
        },
        {
            src: About1,
            alt: "About"
        },
        {
            src: About2,
            alt: "About"
        },
        {
            src: About3,
            alt: "About"
        },
        {
            src: Contact,
            alt: "Contact"
        },
        {
            src: Admin,
            alt: "Admin"
        },
        {
            src: Inquiries,
            alt: "Inquiries"
        },
        {
            src: Profile,
            alt: "Profile"
        }
    ];

    return (
        <>
            <div className="project row mx-5 my-3 py-5 px-4">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="fp-text fw-bold pb-2">Featured Project </h1>
                    <h3 className="fw-bold py-2" style={{ color: "#198754" }}>
                        A Web Catalog with Inquiry Management Application for Sleepy PH
                    </h3>
                    <h5 className="fst-italic fw-light">Front-end Developer </h5>
                    <div className="fp-desc font-400">
                        <p>
                            The project features a product catalog for the business, Sleepy PH, with an administrator module for
                            management of inquiries sent using the contact form of the website.
                        </p>
                        <p className="fw-bold">Features:</p>
                        <ul>
                            <li>Login/Forgot Password</li>
                            <li>Product Catalogue</li>
                            <li>Inquiry Management</li>
                            <li>CRUD Functionalities</li>
                        </ul>
                        <p className="fw-bold">Tools and Technologies Used:</p>
                        <p>HTML, CSS, Bootstrap, PHP, MySQL, phpMyAdmin, PHPMailer, and GitHub</p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex align-items-center">
                    <Carousel fade variant="dark" controls={false}>
                        {images.map((img, pos) => (
                            <Carousel.Item interval={2000} key={pos}>
                                <img
                                    className="d-block w-100"
                                    src={img.src}
                                    alt={img.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Button variant="dark" className="viewSite-btn main-font mt-2">
                        <a className="text-white" href="https://sleepyph.000webhostapp.com" target="__blank" style={{ textDecoration: "none" }}>
                            View Main Website
                        </a>
                    </Button>
                    <Button variant="dark" className="viewSite-btn main-font mt-2">
                        <a className="text-white" href="https://sleepyph.000webhostapp.com/admin/index.php" target="__blank" style={{ textDecoration: "none" }}>
                            View Admin Site
                        </a>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Sleepy