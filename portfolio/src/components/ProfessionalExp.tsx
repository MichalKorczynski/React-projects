import '../App.css'
import React, { useState } from 'react';
function ProfessionalExp() {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <>
            <h1>Professional Experience</h1>
            <div className="project" onClick={handleClick}>
                <div className={`card ${flipped ? 'flipped' : ''}`}>
                    <div className="front">
                        <h2>I don't have any professional experience yet</h2><br /><br />
                    </div>
                    <div className="back">
                        <h3>Details</h3>
                        <p>lack of details</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProfessionalExp;