import '../App.css'
import Projects from './Projects'
import Education from './Education'
import ProfessionalExp from './professionalExp';
function MainContent() {
    return (
        <div className='right-side'>
            <Projects></Projects>
            <Education></Education>
            <ProfessionalExp></ProfessionalExp>
        </div>
    );
}

export default MainContent;