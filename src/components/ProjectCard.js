import React from 'react'
import { Card } from "react-bootstrap";

// Animate on Scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ProjectCard = (props) => {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);
    
    return (
        <Card 
            className="project-card shadow" 
            onClick={props.onClick} 
            title="Click to View Project"
            data-aos="zoom-in"
        >
            <Card.Img 
                variant="top" 
                src={props.src} 
                alt={props.alt}
            />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text className="font-400">
                    {props.snippet}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard