import React from 'react';
import Card from 'react-bootstrap/Card';
// import '../components_styled/About.css';


export default function AboutMe() {
    return (
    <div className="AboutMeCard">
        <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h3>
                    {' '}
                    Things aren’t always #000000 and #FFFFFF{' '}
                    </h3>
                    <footer className="blockquote-footer">
                    HTML
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </div>
    )
}
