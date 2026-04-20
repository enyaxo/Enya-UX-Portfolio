import { useState } from 'react'
import './App.css'
import LandingPage from './LandingPage.jsx';
import MainContainer from "./MainContainer.jsx";

function App() {

  return (
      <body>
          <div className={"background"}>
              <LandingPage/>
              {/*<MainContainer/>*/}
          </div>
      </body>
  )
}

export default App
