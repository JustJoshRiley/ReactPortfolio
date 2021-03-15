import React from 'react'
import { Container } from 'react-bootstrap';
import ContactForm from '../components/sections/ContactMe';

export default function Contact() {
    return (
        <Container className="contactPage-container">
            <ContactForm />
        </Container>
    )
}
