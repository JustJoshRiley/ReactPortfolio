import React from 'react'
import {Link} from "react-router-dom";
// import "../components_styled/Navbar.css";
import { Container, Nav, Navbar, } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Container fluid="xs">
            <Navbar  className="navbar" bg="light" sticky="top">
                <Navbar.Brand className="navbar-NavBrand">
                    <Link  to="/">
                        <h2 className="navTitle">
                            Joshua W. Riley
                        </h2>
                    </Link>
                </Navbar.Brand>
                <div className="navbar-right-self">
                    <Nav className="right-nav-links">
                        <Nav.Link>
                            <Link className="navbar-right-link home" to="/">home.</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navbar-right-link" to="/projects">projects.</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navbar-right-link" to="/contact">contact.</Link>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </Container>
    )
}
