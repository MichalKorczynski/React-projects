import '../App.css'
import React, { useState } from 'react';
function Education() {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <>
            <h1>Education</h1>
            <div className="project" onClick={handleClick}>
                <div className={`card ${flipped ? 'flipped' : ''}`}>
                    <div className="front">
                        <h2>Technikum nr 10, Technik programista</h2><br /><br />
                        <p className='java'>Java</p><p className='swing'>Swing</p><p className='html'>HTML</p><p className='css'>CSS</p><p className='react'>React</p><p className='cpp'>C++</p>
                    </div>
                    <div className="back">
                        <h3>Details</h3>
                        <p>It is a technical school with a programming profile.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;