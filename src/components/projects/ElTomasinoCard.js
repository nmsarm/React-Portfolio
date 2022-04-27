import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';
import ElTomasino from '../../assets/img/projects/el-tomasino/el-tomasino1.png';

const details = [
    {
        src: ElTomasino,
        alt: "El Tomasino Image",
        title: "El Tomasino: A Web Application Dedicated in Promoting UST Athletes",
        text: "lorem ipsum",
        btn: "View Project"
    }
];

const ElTomasinoCard = () => {
    
    return (
        <>
            {details.map((data) => (
                <ProjectCard
                    src={data.src}
                    alt={data.alt}
                    title={data.title}
                    text={data.text}
                    btn={data.btn}
                />
            ))}
        </>
    );
}

export default ElTomasinoCard