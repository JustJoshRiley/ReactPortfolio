import React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';

export default function ContactForm() {

    return (
        <>
            <h3>
                Get in Touch
            </h3>
            <Form className='contactME-form boxy'>
                <form id="my-form-id" method="post" action="https://api.formcake.com/api/form/f661e74a-31dc-4ed3-8644-b423afc9ce06/submission">
                    <FormGroup className="form" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Email"/>
                        <Form.Text className="text-muted">
                            I'll never share your email with anyone else.
                        </Form.Text>
                    </FormGroup>
                    <FormGroup className="form" controlId="formSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control name="email" type="text" placeholder="Subject"/>
                    </FormGroup>
                    <Form.Group className="form" controlId="formText">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="email" as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="secondary" type="submit" >Send</Button>
                </form>
            </Form>
        </>
    )
}
