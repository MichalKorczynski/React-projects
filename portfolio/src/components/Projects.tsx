import '../App.css'
import React, { useState } from 'react';
function Projects() {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    const [flipped2, setFlipped2] = useState(false);

    const handleClick2 = () => {
        setFlipped2(!flipped2);
    };

    const [flipped3, setFlipped3] = useState(false);

    const handleClick3 = () => {
        setFlipped3(!flipped3);
    };
    return (
        <>
            <h1>Projects</h1>
            <div className="project" onClick={handleClick}>
                <div className={`card ${flipped ? 'flipped' : ''}`}>
                    <div className="front">
                        <h2>Minesweeper</h2>
                        <a href='https://github.com/MichalKorczynski/Java-projects/tree/main/Minesweeper'>GitHub</a><br /><br />
                        <p className='java'>Java</p><p className='swing'>Swing</p>
                    </div>
                    <div className="back">
                        <h3>Projct - Details</h3>
                        <p>Minesweeper is an old popular game about finding where the mines are. This game involves finding mines on a grid without triggering them. It's a test of memory and logic!</p>
                    </div>
                </div>
            </div>

            <div className="project" onClick={handleClick2}>
                <div className={`card ${flipped2 ? 'flipped' : ''}`}>
                    <div className="front">
                        <h2>Watch shop</h2>
                        <a href='https://github.com/MichalKorczynski/MichalKorczynski.github.io/tree/main/Grid%20css'>GitHub - project</a><br />
                        <a href="https://michalkorczynski.github.io/Grid%20css/index.html">Website</a><br /><br />
                        <p className='html'>HTML</p><p className='css'>CSS</p>
                    </div>
                    <div className="back">
                        <h3>Projct - Details</h3>
                        <p>This project is a website selling watches.</p>
                    </div>
                </div>
            </div>
            <div className="project" onClick={handleClick3}>
                <div className={`card ${flipped3 ? 'flipped' : ''}`}>
                    <div className="front">
                        <h2>List of recipes</h2>
                        <a href='https://github.com/MichalKorczynski/React-projects/tree/main/listofrecipes'>GitHub - project</a><br /><br />
                        <p className='react'>React</p><p className='css'>CSS</p>
                    </div>
                    <div className="back">
                        <h3>Projct - Details</h3>
                        <p>This game involves finding mines on a grid without triggering them. It's a test of memory and logic!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;