import React from 'react'
import { Container } from 'react-bootstrap';
import ContactForm from '../components/sections/ContactMe';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <Container className="contact-container">
            <ContactForm />
        </Container>
    )
}
