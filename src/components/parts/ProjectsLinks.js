import React from 'react'
import Row from 'react-bootstrap/Row';
import { FaPython, FaReact, FaJsSquare, FaGithub  } from "react-icons/fa";

import '../components_styled/ProjectsLinks.css';

export default function ProjectsLinksBox() {
    return (
        <div>
            <Row className="project-link-body">
                <div className="project-link">
                    <FaPython />
                </div>
            </Row>
            <Row className="project-link-body" href="https://www.linkedin.com/in/joshua-william-riley/ " target="_blank ">
                <div className="project-link">
                    <FaReact />
                </div>
            </Row>
            <Row className="project-link-body">
                <div className="project-link">
                    <FaJsSquare />
                </div>
            </Row>
            <Row className="project-link-body">
                <div className="project-link">
                    <FaGithub />
                </div>
            </Row>
        </div>
    )
}
