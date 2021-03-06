import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'; 
import Nav from 'react-bootstrap/Nav';

export default function Projects() {
    return (
    <>
        <Container fluid className="projectsPage-container">
            <Row className="projectsPage-container-row">
                <Col xs={12} className="projectsPage-header-text">
                    <h1 className="projectsPage-header">
                        Projects
                    </h1>
                </Col>
                <Tab.Container variant="outline-secondary" id="tab-container" defaultActiveKey="first">
                    <Col xs={11}>
                        <Nav variant="pills" className="tab-nav">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Hoya</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">BMR</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Crazy Portfolio</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} className="projectsPage-item-container">
                        <Tab.Content className="tab-content">
                                <Tab.Pane eventKey="first">
                                    <Col xs={12}  className=" ">
                                        <Card className="border-none text-black projectsPageCard">
                                        <iframe  className="projectCard-iframe" src="https://hoya-housing.herokuapp.com/" title="Hoya 🪴"></iframe>
                                            <Card.Title className="projectsPageCard-text">Hoya 🪴</Card.Title>
                                            <Card.Text className="projectsPageCard-text">
                                                Hoya simplified the home-searching experience. Our Price Prediction algorithm tracks market trends.
                                                With a few clicks find the value of your home, or the one you're looking for.
                                            </Card.Text>
                                            <Card.Text className="projectsPageCard-text">Tech Stack: Flask | Bootstrap | TensorFlow</Card.Text>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Col xs={12} className=" ">
                                    <Card className=" text-black ">
                                        {/* <img ></img> */}
                                        <iframe className="projectCard-iframe" src="https://justjoshriley.github.io/Calculator-Web/" title="BMR Calculator"></iframe>
                                            <Card.Title className="projectsPageCard-text">BMR Calculator </Card.Title>
                                            <Card.Text className="projectsPageCard-text">
                                            This Calculator Will Help Determine Your Basal Metabolic Rate (BMR). 
                                            The Metabolic age is calculated by comparing your Basal Metabolic Rate to the average BMR of your chronological age group.
                                            </Card.Text>
                                            <Card.Text className="projectsPageCard-text">Tech Stack: HTML | CSS | Javascript</Card.Text>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Col xs={12} className=" ">
                                    <Card className=" text-black ">
                                        {/* <img ></img> */}
                                        <iframe className="projectCard-iframe" src="https://joshriley.tech" title="Crazy Portfolio"></iframe>
                                            <Card.Title className="projectsPageCard-text">Crazy Portfolio </Card.Title>
                                            <Card.Text className="projectsPageCard-text">
                                            This portfolio represents my past, present, and future as an engineer. My portfolio will continue to grow with me. New additions added weekely. 
                                            </Card.Text>
                                            <Card.Text className="projectsPageCard-text">Current Tech Stack: React | CSS | Javascript</Card.Text>
                                        </Card>
                                    </Col>
                                </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Tab.Container>
            </Row>
        </Container>
    </>
    )
}
