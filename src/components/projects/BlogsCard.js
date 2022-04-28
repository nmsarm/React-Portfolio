import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Blogs from '../../assets/img/projects/blogs/blogs.png';
import Article from '../../assets/img/projects/blogs/article.png';
import Search from '../../assets/img/projects/blogs/search.png';
import About from '../../assets/img/projects/blogs/about.png';
import Create from '../../assets/img/projects/blogs/new-blog.png';

import { Modal, CloseButton, Button, Carousel } from "react-bootstrap";

const details = [
    {
        src: Blogs,
        alt: "Blogs Image",
        title: "Blog Site",
        snippet: "A blog site with CRUD functionalities",
        desc: "The project is an activity given at our JavaScript class during my internship at TELUS International Philippines, Inc." +
        " We were tasked to create a NodeJS blog site where the user can create, read, delete, and search blogs."
    }
];

const images = [
    {
        src: Blogs,
        alt: "Home Page"
    },
    {
        src: Article,
        alt: "Article Page"
    },
    {
        src: Search,
        alt: "Search Page"
    },
    {
        src: About,
        alt: "About Page"
    },
    {
        src: Create,
        alt: "Create Page"
    }
];

const BlogsCard = () => {

    const [xlShow, setXLShow] = useState(false);

    const handleShow = () => {
        setXLShow(true);
    }

    const handleClose = () => setXLShow(false);

    return (
        <>
            {details.map((data) => (
                <>
                    <ProjectCard
                        src={data.src}
                        alt={data.alt}
                        title={data.title}
                        snippet={data.snippet}
                        onClick={handleShow}
                    />

                    <Modal
                        size="xl"
                        show={xlShow}
                        onHide={handleClose}
                        centered
                    >
                        <Modal.Header className="bg-dark text-white">
                            <Modal.Title><h3 className="main-font">{data.title}</h3></Modal.Title>
                            <CloseButton variant="white" onClick={handleClose}/>
                        </Modal.Header>
                        <Modal.Body>
                            <Carousel fade variant="dark">
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
                            <div className="project-details font-400">
                                <p className="fw-bold mt-3">Description: </p>
                                <p>{data.desc}</p>
                                <p>Features:</p>
                                <ol>
                                    <li>Create Blog</li>
                                    <li>Read Blog/s</li>
                                    <li>Delete a Blog/Delete All Blogs</li>
                                    <li>Search Blogs</li>
                                </ol>
                                <p className="fw-bold">Tools and Technologies Used:</p>
                                <p>HTML, CSS, Bootstrap, Node/ExpressJS, EJS, MongoDB and GitHub</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={handleClose} className="main-font">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ))}
        </>
    );
}

export default BlogsCard