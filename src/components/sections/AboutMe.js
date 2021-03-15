import React from 'react';
import Card from 'react-bootstrap/Card';
// import '../components_styled/About.css';


export default function AboutMe() {
    return (
    <div className="AboutMeCard boxy">
        <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h3 className='AboutMe-blockquote-header'>
                    {' '}
                    Things aren’t always #000000 and #FFFFFF{' '}
                    </h3>
                    <footer className="AboutMe-blockquote-footer">
                    HTML
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </div>
    )
}
