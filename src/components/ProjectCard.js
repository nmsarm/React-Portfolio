import React from 'react'
import { Card, Button } from "react-bootstrap";

const ProjectCard = (props) => {
    return (
        <Card className="project-card shadow">
            <Card.Img variant="top" src={props.src} alt={props.alt}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">{props.btn}</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard