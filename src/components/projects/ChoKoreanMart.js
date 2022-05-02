import React from 'react';
import { Carousel, Button } from "react-bootstrap";
import login from '../../assets/img/projects/cho-korean-mart/login.png';
import dash from '../../assets/img/projects/cho-korean-mart/dashboard.png';
import accs from '../../assets/img/projects/cho-korean-mart/accounts.png';
import adduser from '../../assets/img/projects/cho-korean-mart/add-user.png';
import inventory from '../../assets/img/projects/cho-korean-mart/inventory.png';
import addproduct from '../../assets/img/projects/cho-korean-mart/add-product.png';
import stock from '../../assets/img/projects/cho-korean-mart/stock.png';
import pos from '../../assets/img/projects/cho-korean-mart/pos.png';
import pos2 from '../../assets/img/projects/cho-korean-mart/pos-2.png';
import sales from '../../assets/img/projects/cho-korean-mart/sales.png';
import history from '../../assets/img/projects/cho-korean-mart/history.png';
import transaction from '../../assets/img/projects/cho-korean-mart/transaction.png';
import invoice from '../../assets/img/projects/cho-korean-mart/invoice.png';

const ChoKoreanMart = () => {

    const images = [
        {
            src: login,
            alt: "Login"
        },
        {
            src: dash,
            alt: "Dashboard"
        },
        {
            src: accs,
            alt: "Accounts"
        },
        {
            src: adduser,
            alt: "Add User"
        },
        {
            src: inventory,
            alt: "Inventory"
        },
        {
            src: addproduct,
            alt: "Add Product"
        },
        {
            src: stock,
            alt: "Stocks"
        },
        {
            src: pos,
            alt: "POS"
        },
        {
            src: pos2,
            alt: "POS 2"
        },
        {
            src: sales,
            alt: "Sales"
        },
        {
            src: history,
            alt: "History"
        },
        {
            src: transaction,
            alt: "Transaction"
        },
        {
            src: invoice,
            alt: "Invoice"
        }
    
    ];

    return (
        <>
            <div className="row mx-5 my-3 py-5 px-4">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="fp-text fw-bold pb-2">Featured Project </h1>
                    <h3 className="fw-bold py-2" style={{ color: "#198754" }}>
                    POS with Inventory Management for CHO Korean Mart
                    </h3>
                    <div className="font-400">
                        <p>
                            A tailored content management platform created for the Institute of Physical Education and Athletics (IPEA)
                            of the University of Santo Tomas. The project aims to help in promoting the athletes of the University through an athletic-focused website.
                        </p>
                        <p className="fw-bold">Features:</p>
                        <ul>
                            <li>Webpages for Athletes, Teams, Alumni, Game Schedules, Latest News,  Athlete Stories, About</li>
                            <li>Registration Forms</li>
                            <li>Login/Forgot Password</li>
                            <li>CRUD Functionalities for Accounts and Content Management</li>
                            <li>Engagement Reports, Audit Logs, Archive</li>
                        </ul>
                        <p className="fw-bold">Tools and Technologies Used:</p>
                        <p>HTML, CSS, Bootstrap, React, Electron, NeDB, and GitHub</p>
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex align-items-center">
                    <Carousel fade variant="dark" controls={false}>
                        {images.map((img) => (
                            <Carousel.Item interval={2000}>
                                <img
                                    className="d-block w-100"
                                    src={img.src}
                                    alt={img.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default ChoKoreanMart