import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { FaMediumM, FaLinkedinIn, FaFilePdf } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

export default function SocialLinksBox() {
    return (
    <Container>
        <Row className="social-link-body">
            <button>
                <a className="social-link" target="_blank " href="https://justjoshriley.medium.com">
                    <FaMediumM/>
                </a>
            </button>
        </Row>
        <Row className="social-link-body" >
            <button>
                <a className="social-link "target="_blank " href="https://www.linkedin.com/in/joshua-william-riley/" >
                    <FaLinkedinIn/>
                </a>
            </button>
        </Row>
        <Row className="social-link-body">
            <button>
                <a className="social-link " target="_blank " href="https://github.com/JustJoshRiley">
                    <GoMarkGithub/>
                </a>
            </button>
        </Row>
        <Row className="social-link-body">
            <button>
                <a className="social-link " target="_blank " href="https://drive.google.com/file/d/1ipY5KQ9k8Cmn8GBFoOLvYTxEID2PDTR0/view?usp=sharing">
                    <FaFilePdf/>
                </a>
            </button>
        </Row>
    </Container>
    )
}
