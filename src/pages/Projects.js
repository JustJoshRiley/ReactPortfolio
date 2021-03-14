import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsLinks from '../components/parts/ProjectsLinks';
// import ProjectAccordian from '../components/Project/Accordian';
import '../styles/Projects.css';

export default function Projects() {
    return (
    <>
        <Container className="projects-container">
            <Row className="projects-header-container">
                <Col xs={12} className="projects-header-text  boxy">
                    <h1 className="projects-header">
                        Projects
                    </h1>
                </Col>
                <Col xs={12} className="project-container">
                    <Row className="projects-row">
                        <Col xs={12} lg={3}  className="project-container-item ">
                            {/* <ProjectAccordian /> */}
                        </Col>
                        <Col xs={12} lg={3} className="project-container-item ">
                            {/* <ProjectAccordian /> */}
                        </Col>
                        <Col xs={12} lg={3}  className="project-container-item ">
                            {/* <ProjectAccordian /> */}
                        </Col>
                    </Row>
                </Col>
                <Row className="projects-links-row"> 
                    <Row xs={1}>
                        <ProjectsLinks />
                    </Row>
                </Row>
            </Row>
        </Container>
    </>
    )
}
