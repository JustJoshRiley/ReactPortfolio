import React from 'react'
import Row from 'react-bootstrap/Row';
import { FaPython, FaReact, FaJsSquare, FaGithub  } from "react-icons/fa";


export default function ProjectsLinksBox() {
    return (
        <div>
            <Row className="projects-skills-body boxy">
                <div className="projects-skills">
                    <FaPython />
                </div>
            </Row>
            <Row className="projects-skills-body" href="https://www.linkedin.com/in/joshua-william-riley/ " target="_blank ">
                <div className="projects-skills">
                    <FaReact />
                </div>
            </Row>
            <Row className="projects-skills-body">
                <div className="projects-skills">
                    <FaJsSquare />
                </div>
            </Row>
            <Row className="projects-skills-body">
                <div className="projects-skills">
                    <FaGithub />
                </div>
            </Row>
        </div>
    )
}
