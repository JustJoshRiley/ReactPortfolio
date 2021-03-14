import React from 'react';
import SocialLinksBox from '../components/parts/SocialLinksBox';
import AboutMe from '../components/sections/AboutMe';
import Typing from '../components/parts/Typing';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Home.css';

export default function HomePage() {
    return (
    <>
        <Container className="homepage-container">
            <Row className="homepage-header-container">
                <Col xs={12} className="homepage-header-text boxy">
                    <Typing />
                </Col>
                <Col xs={12} md={11}className="about-container boxy">
                    <Row className="about-row">
                        <Col xs={12} md={6} className="about-container-item">
                            <img  src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=DarkBrown'
                                className="left-image-about boxy" alt="Joshua W. Riley"
                                style={{ height: '50%', width: '50%'}}
                            />
                        </Col>
                        <Col xs={12} md={6} className="about-container-item">
                            <AboutMe />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={1} className="social-links-container">
                    <Row>
                        <SocialLinksBox />
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
    )
}