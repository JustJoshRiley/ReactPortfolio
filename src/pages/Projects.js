import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsLinks from '../components/parts/ProjectsLinks';
// import ProjectAccordian from '../components/Project/Accordian';
// import '../styles/Projects.css';

export default function Projects() {
    return (
    <>
        <Container className="projectsPage-container">
            <Row className="projectsPage-header-container">
                <Col xs={12} className="projectsPage-header-text  boxy">
                    <h1 className="projectsPage-header">
                        Projects
                    </h1>
                </Col>
                <Col xs={12} className="projectsPage-container">
                    <Row className="projectsPage-row">
                        <Col xs={12} lg={3}  className="projectsPage-container-item ">
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
                <Row className="projectsPage-links-row"> 
                    <Row xs={1}>
                        <ProjectsLinks />
                    </Row>
                </Row>
            </Row>
        </Container>
    </>
    )
}
