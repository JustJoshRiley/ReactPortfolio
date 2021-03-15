import React from 'react';
import SocialLinksBox from '../pagesPieces/SocialLinksBox';
import AboutMe from '../sections/AboutMe';
import Typing from '../pagesPieces/Typing';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {
    return (
    <>
        <Container className="homepage-container">
            <Row className="homepage-header-container">
                <Col xs={12} className="homepage-header-text boxy">
                    <Typing />
                </Col>
                <Col xs={12} md={11}className="homepage-about-container boxy">
                    <Row className="homepage-about-row">
                        <Col xs={12} md={6} className="homepage-about-container-item">
                            <img  src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=DarkBrown'
                                className="left-image-about boxy" alt="Joshua W. Riley"
                                style={{ height: '50%', width: '50%'}}
                            />
                        </Col>
                        <Col xs={12} md={6} className="homepage-aboutMe-item">
                            <AboutMe />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={1} className="homepage-social-links-container">
                    <Row>
                        <SocialLinksBox />
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
    )
}
