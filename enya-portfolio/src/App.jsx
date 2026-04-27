import {useEffect, useState} from 'react'
import './App.css'
import LandingPage from './LandingPage.jsx';
import MainContainer from "./MainContainer.jsx";
import cursorDefault from './assets/cursor_default.svg'
import cursorClick from './assets/cursor_click.svg'

function App() {

    const [cursor, setCursor] = useState(cursorDefault)

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
    }, [])

  return (
      <body>
          <div className={"background"}>
              <LandingPage/>
          </div>
      </body>
  )
}

export default App
