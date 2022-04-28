import React from 'react'
import { Card, Button } from "react-bootstrap";

const ProjectCard = (props) => {
    return (
        <Card 
            className="project-card shadow" 
            onClick={props.onClick} 
            style={{cursor: "pointer"}} 
            title="Click to View Project"
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
                {/* <Button variant="primary" onClick={props.onClick}>
                    {props.btn}
                </Button> */}
            </Card.Body>
        </Card>
    );
}

export default ProjectCard