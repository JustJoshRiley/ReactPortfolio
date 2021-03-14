import React from 'react'
import Typical from 'react-typical';
import '../components_styled/Typing.css';

export default function Typing() {
    return (
        <h1 className="typing-text">
            <Typical 
                loop={1}
                wrapper={'h3'}
                steps = {[
                    "Hello there", 1075,
                    "I'm Joshua Riley", 1075,
                    "Welcome to my portfolio", 2000,
                    "I like to build websites -Josh Riley", 3025,
                ]}
            />
        </h1>
    )
}