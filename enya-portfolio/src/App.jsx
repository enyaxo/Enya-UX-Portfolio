import {useEffect, useState} from 'react'
import './App.css'
import LandingPage from './LandingPage.jsx';
import MainContainer from "./MainContainer.jsx";
// import cursorDefault from './assets/cursor_default.png'
// import cursorClick from './assets/cursor_click.png'

function App() {

    /* const [cursor, setCursor] = useState(cursorDefault)

    useEffect(() => {
        document.documentElement.style.cursor = `url(${cursor}) 0 0, auto`
    }, [cursor])

    useEffect(() => {
        const handleMouseUp = () => {
            console.log('mouseup fired')
            setCursor(cursorDefault)
        }
        const handleMouseDown = () => {
            console.log('mousedown fired')
            setCursor(cursorClick)
        }


        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mousedown', handleMouseDown)
        }
    }, []) */

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
