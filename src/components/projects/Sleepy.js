import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import home from '../../assets/img/projects/sleepy/home.png';
import products from '../../assets/img/projects/sleepy/products.png';
import product from '../../assets/img/projects/sleepy/product.png';
import about1 from '../../assets/img/projects/sleepy/about-1.png';
import about2 from '../../assets/img/projects/sleepy/about-2.png';
import about3 from '../../assets/img/projects/sleepy/about-3.png';
import contact from '../../assets/img/projects/sleepy/contact.png';
import admin from '../../assets/img/projects/sleepy/admin.png';
import inquiries from '../../assets/img/projects/sleepy/inquiries.png';
import profile from '../../assets/img/projects/sleepy/profile.png';

const Sleepy = () => {

    const images = [
        {
            src: home,
            alt: "Home"
        },
        {
            src: products,
            alt: "Products"
        },
        {
            src: product,
            alt: "Product"
        },
        {
            src: about1,
            alt: "About"
        },
        {
            src: about2,
            alt: "About"
        },
        {
            src: about3,
            alt: "About"
        },
        {
            src: contact,
            alt: "Contact"
        },
        {
            src: admin,
            alt: "Admin"
        },
        {
            src: inquiries,
            alt: "Inquiries"
        },
        {
            src: profile,
            alt: "Profile"
        }
    ];

    return (
        <>
            <div className="row mx-5 my-3 py-5 px-4">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="fp-text fw-bold pb-2">Featured Project </h1>
                    <h3 className="fw-bold py-2" style={{ color: "#198754" }}>
                        A Web Catalog with Inquiry Management Application for Sleepy PH
                    </h3>
                    <h5 className="fst-italic fw-light">Front-end Developer </h5>
                    <div className="font-400">
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
                        <p>PHP, MySQL, phpMyAdmin, PHPMailer, and GitHub</p>
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