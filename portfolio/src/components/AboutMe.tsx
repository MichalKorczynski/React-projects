import '../App.css'
import RandomPokemon from './RandomPokemon';
import 'font-awesome/css/font-awesome.min.css';


function AboutMe() {
    return (
        <div className='left-side'>
            <h1>Michał Korczyński</h1>
            <h2>Java Developer</h2><br />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto! Velit laboriosam, accusantium magni debitis autem illo doloribus natus praesentium assumenda beatae soluta, provident modi harum, eaque nesciunt! Hic, error.
            </p><br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto! Velit laboriosam, accusantium magni debitis autem illo doloribus natus praesentium assumenda beatae soluta, provident modi harum, eaque nesciunt! Hic, error.
            </p><br />


            <RandomPokemon /><br></br><br></br><br></br><br></br>

            <div className="contact-links">
                <a target="_blank" href="tel:570-586-999"><i className="fa fa-phone"></i></a>
                <a target="_blank" href="mailto:michalkorczynski0@gmail.com"><i className="fa fa-envelope"></i></a>
                <a target="_blank" href="https://github.com/MichalKorczynski"><i className="fa fa-github"></i></a>
            </div>
        </div >
    );
}

export default AboutMe;