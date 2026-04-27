import './MainContainer.css'
import NavBar from "./NavBar.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import React, {useState} from "react";
import Contact from "./pages/Contact.jsx";
import Sparkle from "./Sparkle.jsx";


function MainContainer() {
    const [activePage, setActivePage] = useState('about')

    /* Using useState to track the active page, and switch in between pages in a single page (without routing) */
    const RenderPage = () => {
        switch(activePage) {
            case 'about':
                return <About/>
            case 'works':
                return <Works/>;
            case 'contact':
                return <Contact/>;
            default:
                return <About/>;
        }
    }

    return (
        <div className={"container-box"}>
            {Array.from({ length: 25 }, (_, i) => <Sparkle key={i}/>)}
            <div className={"container-content"}>
                <div style={{position:"sticky", top:"0", zIndex: 100}}><NavBar/></div>
                <div className={"scrollable-content"}>
                    <div className={"box-content"}>
                        <div className={'page-title'}>
                            <h1>hello, i'm <span>enya</span></h1>
                        </div>
                        <h2>third year ux/ui design student, web & app developer</h2>
                    </div>
                    <div className={"divider"}>
                        <ul>
                            <li onClick={() => setActivePage('about')} className={'nav-button'}>About</li>
                            <li onClick={() => setActivePage('works')} className={'nav-button'}>Works</li>
                            <li onClick={() => setActivePage('contact')} className={'nav-button'}>Contact</li>
                        </ul>
                    </div>
                    <div className={'page-content'}>
                        {RenderPage()}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainContainer