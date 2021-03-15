import React from 'react';
import Card from 'react-bootstrap/Card';


export default function AboutMe() {
    return (
    <div className="AboutMeCard boxy">
        <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <h4 className='AboutMe-blockquote-header'>
                    {' '}
                    Things aren’t always #000000 and #FFFFFF{' '}
                    </h4>
                    <footer className="blockquote-footer">
                    HTML
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    </div>
    )
}
