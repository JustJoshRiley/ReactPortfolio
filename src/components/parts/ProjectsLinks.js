import React from 'react'
import Row from 'react-bootstrap/Row';
import { FaPython, FaReact, FaJsSquare, FaGithub  } from "react-icons/fa";


export default function ProjectsLinksBox() {
    return (
        <div>
            <Row className="projects-links-body">
                <div className="projects-links">
                    <FaPython />
                </div>
            </Row>
            <Row className="projects-links-body" href="https://www.linkedin.com/in/joshua-william-riley/ " target="_blank ">
                <div className="projects-links">
                    <FaReact />
                </div>
            </Row>
            <Row className="projects-links-body">
                <div className="projects-links">
                    <FaJsSquare />
                </div>
            </Row>
            <Row className="projects-links-body">
                <div className="projects-links">
                    <FaGithub />
                </div>
            </Row>
        </div>
    )
}
