import {useEffect, useState} from 'react'
import './App.css'
import LandingPage from './LandingPage.jsx';
import MainContainer from "./MainContainer.jsx";

function App() {

    const [selectedProject, setSelectedProject] = useState(null)

    return (
    <div className="background">
        {selectedProject
        ? <MainContainer project={selectedProject} onBack={() => setSelectedProject(null)} />
        : <LandingPage onCardClick={setSelectedProject} />
        }
    </div>
    )
}

export default App
